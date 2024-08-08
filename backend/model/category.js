const mongoose = require("mongoose")

//    name ,
// 		desc,
// 		author,

const CategorySchema = new mongoose.Schema({

  name:{
    type:String,
    required:true,
  },
  desc:{
    type:String,
    require:true,
  },
  author:{
    type:String,
    required:true,
  } 
},{timestamps:true})

const Category = mongoose.models.Category || mongoose.model("Category",CategorySchema);

module.exports = Category;