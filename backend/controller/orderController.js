const asyncHandler = require("express-async-handler");
const Order = require("../model/order");
const Product = require("../model/product");


// orderNumber ,
// 		customerId,
// 		customerName,
//    customerPhone
//    customerEmail
// 		  orderDate,  default
// 		status,       default
// 		paymentMethod,
// 		shippingAddress,
// 		billingAddress,
// 		shippingCost,
// 		items,
// 		discount,
// 		totalAmount,

const addOrder = asyncHandler(async (req, res) => {
	const {orderNumber,customerId,customerName,customerPhone,customerEmail,paymentMethod,shippingAddress,billingAddress,shippingCost,items,discount,totalAmount} = req.body;

	// if (!orderNumber || !customerId || !customerName || !paymentMethod || !shippingAddress || !billingAddress || !shippingCost || !items || !discount || !totalAmount) {
  //   res.status(400);
  //   throw new Error("All fields required");
	// }


 	// Check Product Exsist
   const order = await Order.findOne({ orderNumber });
   if (order) {
     res.status(400);
     throw new Error("Order already exsists");
   }
 
   // Create New User
   const newOrder = await Order.create({
    orderNumber ,
		customerId,
		customerName,
		customerEmail,
		customerPhone,
		paymentMethod,
		shippingAddress,
		billingAddress,
		shippingCost,
		items,
		discount,
		totalAmount,
   });

   if (newOrder) {
		res.status(200).json({newOrder});

	} else {
		res.status(400);
		throw new Error("Internal server error");
	}
});


const getOrders = asyncHandler(async(req,res)=>{
	const allOrders = await Order.find()
	res.status(200).json(allOrders)

})


const getOrder = asyncHandler(async(req,res)=>{
  const order = await Order.findById(req.params.id)
	res.status(200).json(order)
})

const updateOrder = asyncHandler(async (req,res)=>{
	const id = req.params.id;
	const body = req.body
	const order = await Order.findByIdAndUpdate(id,body);
	res.status(200).json(order)
})


module.exports = {addOrder,getOrders,getOrder,updateOrder};
