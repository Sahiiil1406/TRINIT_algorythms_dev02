const mongoose=require("mongoose")

const tutorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    experience:{
        type: String,
    },
    pricing:{
        type: String,
    },
    language:{
       type:[String]
    }
    },{timestamps:true})

const Tutor=mongoose.model("Tutor",tutorSchema)
module.exports=Tutor