const express = require('express')
const  https = require('https')
const controller = require('../controller/controller')

const app = express()

// Template Engine
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.route('/')
    .get((req,res)=> res.render("index"))




app.route('/Contact')
    .get((req,res)=> res.render("contact"))



app.route('/Developer')
    .get((req,res)=> res.render("developer"))




app.route('/University')
    .get((req,res)=> res.render("university"))


// log-in-pages

    app.route('/Student-login')
    .get((req,res)=> res.render("studentLogin"))
    
    



    app.route('/Teacher-login')
    .get((req,res)=> res.render("teacherLogin"))






    app.route('/Admin-login')
    .get((req,res)=> res.render("adminLogin"))



// student-pages

    app.route('/Dashboard-student')
    .get((req,res)=> res.render("student dashboard"))

    

    app.route('/Feedback-student')
    .get((req,res)=> res.render("student feedback"))


    app.route('/Help-student')
    .get((req,res)=> res.render("student help"))



    app.route('/Profile-student')
    .get((req,res)=> res.render("student profile"))



    app.route('/Result-student')
    .get((req,res)=> res.render("student result"))


    app.route('/Timetable-student')
    .get((req,res)=> res.render("student timetable"))


//Teacher-pages


app.route('/Dashboard-teacher')
.get((req,res)=> res.render("teacher dashboard"))



app.route('/Feedback-teacher')
.get((req,res)=> res.render("teacher feedback"))


app.route('/Help-teacher')
.get((req,res)=> res.render("teacher help"))



app.route('/Profile-teacher')
.get((req,res)=> res.render("teacher profile"))



app.route('/Grade-teacher')
.get((req,res)=> res.render("teacher grades"))


app.route('/Timetable-teacher')
.get((req,res)=> res.render("teacher timetable"))
    

// admin-pages


app.route('/Dashboard-admin')
.get((req,res)=> res.render("admin dashboard"))



app.route('/Feedback-admin')
.get((req,res)=> res.render("admin feedback"))


app.route('/Help-admin')
.get((req,res)=> res.render("admin help"))



app.route('/Student-admin')
.get((req,res)=> res.render("admin student"))
.post(controller.create_student)



app.route('/Teacher-admin')
.get((req,res)=> res.render("admin teacher"))


app.route('/Timetable-admin')
.get((req,res)=> res.render("admin timetable"))





app.route('*')
    .get((req,res)=> res.render('Error'))

module.exports = app;  
