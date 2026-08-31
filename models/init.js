const mongoose = require("mongoose")
let student = require("./student.js");



main().then(console.log("Database connection successful"))
.catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/studentDb");
    console.log("Connected to MongoDB");
}

Students = [
    {
        name: "Johnwick",
        rollNo: "45",
        email: "john@email.com",
        course: "fighting",
        semester: 5,
        phoneNo: 7815063425,

    }
]

student.insertMany(Students);