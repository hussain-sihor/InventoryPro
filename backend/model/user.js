const mongoose =  require("mongoose")
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({

  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    match:[
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email"
    ]
  },
  password:{
    type:String,
    required:true,
    // minlength: [6,"Password must be 6 characters"]
  },
  phone:{
    type:Number,
    required:true,
    // maxlength: [10,"Invalid phone number"]
  },
  position:{
    type:String,
    required:true,
  }

},{timestamps:true})
 UserSchema.pre("save",async function(next){
  // Hashing password before saving
  if(!this.isModified("password")){
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  const encryptedPassword = await bcrypt.hash(this.password,salt);
  this.password = encryptedPassword;

 })
const User = mongoose.models.Users || mongoose.model("Users", UserSchema);


module.exports = User;