const mongoose = require("mongoose")

//    status -completed Pending
// 		task


const ReminderSchema = new mongoose.Schema({
  task:{
    type:String,
    require:true,
  },
},{timestamps:true})

const Reminder = mongoose.models.Reminder || mongoose.model("Reminder",ReminderSchema);

module.exports = Reminder;