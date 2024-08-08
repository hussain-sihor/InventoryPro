const asyncHandler = require("express-async-handler");
const User = require("../model/user");
const jwt = require("jsonwebtoken")


// VERIFIES IF USER SIGN IN BY CHECKING COOKIES, IF NOT PRESENT THEN RETURNS ERROR ELSE SENDS USER DATA IN REQ SO THE PROTECTED ROUTE CAN USE THE DATA.

const authMiddleware = asyncHandler(async (req , res ,next)=>{
 
  const token = req.cookies.token;
  // console.log(req)
  if(!token){
    res.status(401);
    throw new Error("Not authorized");
  }

  // Verify Token
  const verified = jwt.verify(token , process.env.JWT_TOKEN);

  // Get User _id 
  const user = await User.findById(verified.id).select("-password")

  if(!user){
    res.status(401);
    throw new Error("User not found")
  }
  req.user = user;
  next()
 
})


module.exports = authMiddleware;