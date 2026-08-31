const express = require("express");
const app = express();
const path = require("path")
// const mongoose = require("mongoose")
let student = require("./models/student.js");
let connectDb = require("./models/init.js");
const Student = require("./models/student.js");


app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"));





app.get("/home", async (req, res)=>{
    let allStudents = await Student.find();
    res.render("index.ejs", {allStudents})
})

// create route
app.get("/home/new", (req, res) => {
    res.render("new.ejs")
})

// add route
app.post("/home", async(req, res) => {
    let {name, rollNo, email, course, semester, phoneNo} = req.body;
    new_student = new Student({
        name: name,
        rollNo:rollNo,
        email: email,
        course: course,
        semester: semester,
        phoneNo: phoneNo
    })
    await new_student.save();
    res.redirect('/home')
})

// edit route 

app.get("/home/:id/edit", async(req, res) =>{
    let {id} = req.params;
    let student = await Student.findById(id);
    res.render("edit.ejs", {student});
})

app.post("/home/:id/update", async(req, res) => {
    let {id} = req.params;
    let {name, rollNo, email, course, semester, phoneNo} = req.body;
    await Student.findByIdAndUpdate(id, {
        name: name,
        rollNo:rollNo,
        email: email,
        course: course,
        semester: semester,
        phoneNo: phoneNo
    }) 
    res.redirect("/home")
    // res.send("success")
})

// Delete route

app.post("/home/:id/delete" , async(req, res) => {
    let {id} = req.params;
    await Student.findByIdAndDelete(id);
    res.redirect("/home")
})

//  search 

app.get("/search", async(req, res) => {
     
    let search = req.query.search;
    let result = await Student.find({name: search})
    res.render("index.ejs", {allStudents:result});
    
})









app.get("", (req, res)=>{
    res.send("Hello Student")
})

app.listen(8080, () => {
    console.log("listening on port 8080")
})
