const express = require("express")
const {addOrder,getOrders,getOrder,updateOrder} = require("../controller/orderController")
const router = express.Router()


router.post("/addorder",addOrder)
router.get("/getorders",getOrders)
router.get("/getorder/:id",getOrder)
router.put("/getorder/:id",updateOrder)

module.exports = router