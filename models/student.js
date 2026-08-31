const mongoose = require("mongoose")


let studentSchema = new mongoose.Schema({
    
        name: String,
        rollNo: String,
        email: String,
        course: String,
        semester: Number,
        phoneNo: Number
    })

let Student = mongoose.model("Student",studentSchema);
module.exports = Student; 