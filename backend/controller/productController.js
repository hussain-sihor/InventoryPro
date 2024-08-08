const asyncHandler = require("express-async-handler");
const Product = require("../model/product");

const addProduct = asyncHandler(async (req, res) => {
	const {name,category,desc,quantity,price,supplier,level,author,photo,status} = req.body;

	if (!name || !category || !desc || !quantity || !price || !supplier || !level || !author || !photo || !status) {
    res.status(400);
    throw new Error("All fields required");
	}

  console.log("quan",quantity,"level",level,"stat",status)

 	// Check Product Exsist
   const product = await Product.findOne({ name });
   if (product) {
     res.status(400);
     throw new Error("Product already exsists");
   }
 
   // Create New User
   const newProduct = await Product.create({
    name ,
		category,
		desc,
		quantity,
		price,
		supplier,
		level,
		author,
		photo,
		status,
   });

   if (newProduct) {
		res.status(200).json({newProduct});

	} else {
		res.status(400);
		throw new Error("Internal server error");
	}
});


const getProducts = asyncHandler(async(req,res)=>{
	const allProducts = await Product.find()
	res.status(200).json(allProducts)

})

const getProduct = asyncHandler(async(req,res)=>{
	const id = req.params.id;
  
	const product = await Product.findById(id)
	res.status(200).json(product)

})


getStatusProducts = asyncHandler(async(req,res)=>{
	const {status} = req.body;

	if (!status) {
    res.status(400);
    throw new Error("All fields required");
	}

	const allProducts = await Product.find({status:status});
	res.status(200).json(allProducts)
})

getCategoryProducts = asyncHandler(async(req,res)=>{
	const {category} = req.body;

	if (!category) {
    res.status(400);
    throw new Error("All fields required");
	}

	const allProducts = await Product.find({category:category});
	res.status(200).json(allProducts)
})

const updateProduct = asyncHandler(async (req,res)=>{
	const id = req.params.id;
	const body = req.body
	console.log("Prod",body)
	// console.log(id)
	const product = await Product.findByIdAndUpdate(id,body);
	res.status(200).json(product)
})


module.exports = {addProduct,getProducts,getProduct,getStatusProducts,getCategoryProducts,updateProduct};
