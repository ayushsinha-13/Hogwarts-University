const Student = require('../models/student_model');
const Teacher = require('../models/teacher_model');
const Admin = require('../models/admin_model');
const bcrypt = require('bcrypt')


// STUDENT

get_student = async(req,res)=>{
    if(req.isAuthenticated() && req.session.type === 'student'){
        await Student.find({uid: req.session.uid}, (err,foundStudent)=>{
            if(!err){
                res.render("studentDashboard", {Student: foundStudent})
            }
        }).clone()
    }else{
        res.redirect("/student-login")
    }
}

login_student = async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    await Student.findOne({uid:username}, (err,foundStudent)=>{
        if(err){
            res.render("Student",{status:"Some Error"});
        }else{
            if(foundStudent){
                bcrypt.compare(password, foundStudent.password, (err, result)=> {
                    if(err){
                        res.render("Student",{status:"Some error"});
                    }else if(result){
                        req.login(foundStudent,(err)=> {
                        if (err) {
                            console.log(err);
                        }else{
                            passport.authenticate("local");
                            req.session.username = foundStudent.uid;
                            req.session.type = 'student';
                            res.redirect('/studentdashboard');
                        }
                      })
                    }else{
                        res.render("Student",{status:"Wrong Password"});
                    }
                });
            }else{
                res.render("Student",{status:"User doesn't exist"});
            }
        }).clone()
    }

// TEACHER

get_teacher = async(req,res)=>{
    if(req.isAuthenticated() && req.session.type === 'teacher'){
        await Teacher,find({eid: req.session.eid}, (err,foundTeacher)=>{
            res.render("teacherDashboard", {Teacher: foundTeacher})
        }).clone()
    }else{
        res.redirect('/admin-login')
    }
}

//  ADMIN

get_admin = async(req,res)=>{
    if(req.isAuthenticated() && req.session.type === 'admin'){
        await Admin.find({username: req.session.username},(err,foundAdmin)=>{
            res.render("adminDashboard",{Admin: foundAdmin});
        }).clone()
    }else{
        res.redirect('/Admin-login');
    }
}


module.exports = {
    get_student,
    get_teacher,
    get_admin
}
