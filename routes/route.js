const express = require('express')
const session = require('express-session');
const passport = require('passport')
const controller = require('../controller/Controller')
const login = require('../controller/login')

const app = express()

// Template Engine
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))


app.use(session({
    secret: "8016976125",
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize())
app.use(passport.session())
app.use((req,res,next)=>{
    next()
  });

/* Bcrypt */
const saltRounds = 10;

passport.use(Student.createStrategy());
passport.use(Teacher.createStrategy());
passport.use(Admin.createStrategy());

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

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
    .post(login.login_student)
    
    



    app.route('/Teacher-login')
    .get((req,res)=> res.render("teacherLogin"))






    app.route('/Admin-login')
    .get((req,res)=> res.render("adminLogin"))



// student-pages

app.route('/Dashboard-student')
    .get(login.get_student)

    

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
.get(login.get_admin)



app.route('/Feedback-admin')
.get((req,res)=> res.render("admin feedback"))


app.route('/Help-admin')
.get((req,res)=> res.render("admin help"))



app.route('/Student-admin')
.get((req,res)=> res.render("admin student"))



app.route('/Teacher-admin')
.get((req,res)=> res.render("admin teacher"))


app.route('/Timetable-admin')
.get((req,res)=> res.render("admin timetable"))

module.exports = app;  