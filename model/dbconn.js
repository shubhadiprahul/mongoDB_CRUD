const mongoose = require('mongoose');
const validator = require('validator')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required :true,
        unique:[true,'email already exists'],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invaild email");
            }
        }
    },
    phone:{
        type:Number,
        min : 10,
        required:true,
        unique : true
    },
    address:{
        type: String,
        required:true
    },
    password :{
        type:String,
        required:true,
        minlength:8,
        maxlength:16
    }
})

const student = new mongoose.model('student',studentSchema);

module.exports = student;