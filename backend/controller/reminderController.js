const asyncHandler = require("express-async-handler");
const Reminder = require("../model/reminder");



const addReminder= asyncHandler(async (req, res) => {
	const {task} = req.body;

	if (!task ) {
    res.status(400);
    throw new Error("All fields required");
	}

 	// Check Category Exsist
   const reminder = await Reminder.findOne({ task });
   if (reminder) {
     res.status(400);
     throw new Error("Reminder already exsists");
   }
 
   // Create New Reminder
   const newReminder = await Reminder.create({
		task,
   });

   if (newReminder) {
		res.status(200).json(newReminder);

	} else {
		res.status(400);
		throw new Error("Internal server error");
	}
});


const getReminders = asyncHandler(async(req,res)=>{
	const allReminders = await Reminder.find()
	res.status(200).json(allReminders)

})

const deleteReminder = asyncHandler(async(req,res)=>{
	var task = req.params.id;
	// console.log(name)
	const deleted = await Reminder.findByIdAndDelete(task);
    res.status(200).json(deleted)	
})

module.exports = {addReminder,getReminders,deleteReminder};
