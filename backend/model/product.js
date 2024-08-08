const mongoose = require("mongoose")

// name ,
// 		category,
// 		desc,
// 		quantity,
// 		price,
// 		supplier,
// 		level,
// 		status,
// 		author,
// 		photo,

const ProductSchema = new mongoose.Schema({

  name:{
    type:String,
    required:true,
  },
  photo:{
    default:"none",
    type:String,
  },
  desc:{
    type:String,
    require:true,
  },
  category:{
    type:String,
    required:true,
  },
  author:{
    type:String,
    required:true,
  },
  price:{
    type:Number,
    required:true,
  },
   status:{
    type:String,
    required:true,
  },
  supplier:{
    type:String,
    required:true
  },
  quantity:{
    type:Number,
    required:true,
  },
  level:{
    type:Number,
    required:true,
  }
  
},{timestamps:true})

const Product = mongoose.models.Product || mongoose.model("Product",ProductSchema);

module.exports = Product;