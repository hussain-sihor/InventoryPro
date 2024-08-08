const asyncHandler = require("express-async-handler");
const User = require("../model/user");
const jwt = require("jsonwebtoken") //TO GENERATE TOKEN
const bcrypt = require("bcrypt")


const generateToken = (id)=>{
 return jwt.sign({id},process.env.JWT_TOKEN,{expiresIn:"1d"})
}


//Public
//api/users/register
//Post
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password, phone, position } = req.body;

  // Check Missing Data
	if (!name || !email || !password || !phone || !position) {
		res.status(400);
		throw new Error("All fields are required");
	}

	// Check User Exsist
	const user = await User.findOne({ email });
	if (user) {
		res.status(400);
		throw new Error("User already exsists");
	}

	// Create New User
	const newUser = await User.create({
		name,
		email,
		password,
		phone,
		position,
	});

  // Generate Token
  const token = generateToken(newUser._id);

  // Send Cookie
  res.cookie("token",token,{
    path:"/",
    httpOnly:true,
    expires:new Date(Date.now() + 1000*86400), // 1 day
    sameSite:"none",
    secure:true,
  });

	if (newUser) {
		res.status(200).json({"user" : newUser,
      "token" : token});

	} else {
		res.status(400);
		throw new Error("Internal server error");
	}
});


//Public
//api/users/login
//Post
const loginUser = asyncHandler(async(req,res)=>{
  const {email,password} = req.body;
  
  // Check Missing Data
  if(!email || !password){
    res.status(400);
    throw new Error("All fields required");
  }

  // Check If User Exsist
  const user = await User.findOne({email});
  if(!user){
    res.status(400);
    throw new Error("User doesnt exsists");
  }

  // Check If Password Match
  const flag = await bcrypt.compare(password,user.password)
  
  // Generate Token
  const token = generateToken(user._id);

  // Send Cookie
  res.cookie("token",token,{
    path:"/",
    httpOnly:true,
    expires:new Date(Date.now() + 1000*86400), // 1 day
    sameSite:"none",
    secure:true,
  });


  if(user && flag){
    res.status(200).json({"user" : user,
      "token" : token});
  }
  else{
    res.status(400);
    throw new Error("Invalid email or password");
  }

})


//Protected
//api/users/logout 
//Get
const logoutUser = asyncHandler(async(req,res)=>{
 
  //logout is done using expiring the cookie
 res.cookie("token" , "" , {
  path:"/",
  httpOnly:true,
  expires:new Date(0), 
  sameSite:"none",
  secure:true,
});

res.status(200).json({"message":"Successfully logout"}) 
})


//Protected
//api/users/getuser
//Get
const getUser = asyncHandler(async (req,res)=>{
    const user = await User.findById(req.user._id);

    if(user){
      res.status(200);
      res.json({
        user:user
      })
    }
    else{
      res.status(400);
      throw new Error("Internal error")
    }

})


//Public
//api/users/checklogin
//Get
const checkLogin = asyncHandler(async (req,res)=>{
 
  const token = req.cookies.token;
  if(!token){
   return res.json(false)
  }
  // Verify Token
  const verified = jwt.verify(token , process.env.JWT_TOKEN);
  const user = await User.findById(verified.id);

  if(!user){
    return res.json(false)
  }
  else{
    return res.json(true)
  }

})




module.exports = {registerUser,loginUser,logoutUser,getUser,checkLogin};
