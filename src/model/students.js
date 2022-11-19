const mongoose=require("mongoose");
const validator=require("validator");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        minlength:10
    },
    email:{
        type:String,
        required:true,
        unique:true,          
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
        }
})

const Record= new mongoose.model('Record',studentSchema);

module.exports=Record;

