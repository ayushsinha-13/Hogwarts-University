const student = require('../models/student_model');
const teacher = require('../models/teacher_model');
const admin = require('../models/admin_model');
const { find } = require('../models/student_model');



//  student


create_student = async(req,res)=>{
    const uid = req.body.uid
    const name = req.body.name
    const dob  = req.body.dob
    const password = req.body.password
    const gender = req.body.gender
    const address = req.body.address
    const email = req.body.email
    const section = req.body.section
    const phone = req.body.phone

  const newStudent = new student({
    uid : uid ,
    name : name ,
    dob : dob ,
    password : password,
    gender : gender ,
    address : address ,
    email : email ,
    section : section ,
    phone : phone 
  })

  newStudent.save((err)=>{
          if(!err){
              return res.redirect('Dashboard-Admin');
          }else{
              console.log(err);
              return res.redirect("/");
          }
      });
}

get_student = async(req,res)=>{
    const eid = req.body.eid
    await Student.find({}, (err,found)=>{
        res.render('Student')
    }).clone()
}



//  teacher



create_teacher = async(req,res)=>{
    const eid = req.body.eid
    const name = req.body.name
    const dob = req.body.dob
    const spelization = req.body.spelization
    const password = req.body.password
    const gender = req.body.gender
    const joiningyear = req.body.joiningyear
    const address = req.body.address
    const email = req.body.email
    const phone = req.body.phone

    const newTeacher = new teacher({
        eid : eid,  
        name : name, 
        dob : dob,
        spelization : spelization, 
        password : password,
        gender : gender ,
        joiningyear : joiningyear , 
        address : address ,
        email : email , 
        phone : phone
    })
  
    newTeacher.save((err)=>{
            if(!err){
                return res.redirect('Dashboard-Admin');
            }else{
                console.log(err);
                return res.redirect("/");
            }
        });
  }

get_teacher = async(req,res)=>{
    const eid = req.body.eid
    await Teacher.find({}, (err,found)=>{
        res.render('Teacher')
    }).clone()
}

//  admin


create_admin = async(req,res)=>{
    const a_id = req.body.a_id
    const password = req.body.a_id

  
    const newAdmin = new admin({
        a_id : a_id ,
        password : password,
    })
  
    newAdmin.save((err)=>{
            if(!err){
                return res.redirect('Confirmation');
            }else{
                console.log(err);
                return res.redirect("/");
            }
        });
  }
  
  get_admin = async(req,res)=>{
    const username = req.body.username
    await Admin.find({}, (err,found)=>{
        res.render('Teacher')
    }).clone()
  }

module.exports = {
    get_student,
    get_teacher,
    get_admin,
    create_student,
    create_teacher,
    create_admin
}
