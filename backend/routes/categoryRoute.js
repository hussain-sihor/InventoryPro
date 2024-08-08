const express = require("express")
const{addCategory,getCategories,deleteCategory} = require("../controller/categoryController")
const router = express.Router()


router.post("/addcategory",addCategory)
router.get("/getcategories",getCategories)
router.delete("/deletecategory/:id",deleteCategory)

module.exports = router