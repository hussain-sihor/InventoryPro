const express = require("express")
const {registerUser,loginUser,logoutUser,getUser,checkLogin} = require("../controller/userController")
const authMiddleware = require("../middleware/authmiddleware")
const router = express.Router()


router.post("/register",registerUser)

router.post("/login",loginUser)

router.get("/logout",logoutUser)

router.get("/getuser",authMiddleware , getUser)

router.get("/checklogin",checkLogin)

module.exports = router