const mongoose = require("mongoose")

const connectDB = async()=>{
  const connect = mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("DB Connected")})
 
}

module.exports = connectDB;