const express = require("express")
const{addReminder,getReminders,deleteReminder} = require("../controller/reminderController")
const router = express.Router()


router.post("/addreminder",addReminder)
router.get("/getreminders",getReminders)
router.delete("/deletereminder/:id",deleteReminder)

module.exports = router