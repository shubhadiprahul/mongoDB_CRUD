const express = require('express');
router = express.Router();
require('../db/conn')
const student = require('../model/dbconn');

router.post('/signup',(req,res)=>{
    console.log(req.body)
    const data = new student(req.body)
    data.save().then(()=>{
        console.log({'sucess':'student register sucessfully'})
        res.status(200).send({'sucess':'student register sucessfully'})
    })
    .catch((err)=>{
        console.log({'failed':'Student Email already exist'})
        res.status(400).send({'failed':'Student Email already exist'})
    })
})

router.get('/:id',(req,res)=>{
    stud = req.body
    console.log(stud)
    const std = student.findById("_id").then((std)=>{
        console.log(std.params.id)
    }).catch((err)=>{
        res.send(err)
    })
})

router.get('/allData',(req,res)=>{
    const std = student.find()
    .then((std)=>{
        console.log(std)
        res.status(200).send(std)
    }).catch((err)=>{
        res.send(err)
    })
})


module.exports = router