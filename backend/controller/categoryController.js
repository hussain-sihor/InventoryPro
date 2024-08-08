const asyncHandler = require("express-async-handler");
const Category = require("../model/category");

const addCategory= asyncHandler(async (req, res) => {
	const {name,desc,author} = req.body;

	if (!name || !desc || !author) {
    res.status(400);
    throw new Error("All fields required");
	}

 	// Check Category Exsist
   const category = await Category.findOne({ name });
   if (category) {
     res.status(400);
     throw new Error("Category already exsists");
   }
 
   // Create New User
   const newCategory = await Category.create({
    name ,
		desc,
		author
   });

   if (newCategory) {
		res.status(200).json({newCategory});

	} else {
		res.status(400);
		throw new Error("Internal server error");
	}
});


const getCategories = asyncHandler(async(req,res)=>{
	const allCategories = await Category.find()
	res.status(200).json(allCategories)

})
const deleteCategory = asyncHandler(async(req,res)=>{
	var name = req.params.id;
	// console.log(name)
	const deleted = await Category.findByIdAndDelete(name);
    res.status(200).json(deleted)	
})

module.exports = {addCategory,getCategories,deleteCategory};
