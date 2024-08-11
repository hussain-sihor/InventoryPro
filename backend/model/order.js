const mongoose = require("mongoose")


//    orderNumber ,
// 		customerId,
// 		customerName,
//    customerPhone
//    customerEmail
// 		  orderDate,
// 		status,
// 		paymentMethod,
// 		shippingAddress,
// 		billingAddress,
// 		shippingCost,
// 		items,
// 		discount,
// 		totalAmount,

const OrderSchema = new mongoose.Schema({

  orderNumber:{
    type:Number,
    required:true,
  },

  customerId:{
    type:String,
    required:true,
  },

  customerName:{
    type:String,
    required:true,
  },

  customerPhone:{
    type:Number,
    required:true,
  },
  customerEmail:{
    type:String,
    required:true,
  },

  orderDate:{
    type:Date,
    default:Date.now(),
    require:true,
  },

  status:{
    type:String,
    default:"Pending",
    required:true,
  },

   paymentMethod:{
    type:String,
    required:true,
  },

  shippingAddress:{
    street:{
      type:String,
      required:true
    },
    city:{
      type:String,
      required:true
    },
    state:{
      type:String,
      required:true
    },
    zip:{
      type:Number,
      required:true
    },
    country:{
      type:String,
      required:true
    }
  },

  billingAddress:{
    street:{
      type:String,
      required:true
    },
    city:{
      type:String,
      required:true
    },
    state:{
      type:String,
      required:true
    },
    zip:{
      type:Number,
      required:true
    },
    country:{
      type:String,
      required:true
    }
  },

  shippingCost:{
    type:Number,
    required:true
  },

  // messages: {
	// 	type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
	// 	default: [],
	// },

  items:[
    {
      product:{
        type: mongoose.Schema.Types.ObjectId,
		    ref: "Product",
      },
      quantity:{
        type:Number,
        required:true,
      }
    }
  ],

  discount:{
    type:Number,
    required:true,
  },

  totalAmount:{
    type:Number,
    required:true,
  },

 
},{timestamps:true})

const Order = mongoose.models.Order || mongoose.model("Order",OrderSchema);

module.exports = Order;