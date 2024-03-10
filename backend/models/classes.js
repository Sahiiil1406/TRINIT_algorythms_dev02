const mongoose=require("mongoose")
const User=require("./user.model.js")

const classSchema=new mongoose.Schema({
    instructor:{
       type:mongoose.Types.ObjectId,
       ref:User
    },
    student:{
       type:mongoose.Types.ObjectId,
       ref:User 
    },
    language:{
        type:String
    },
    name:{
        type:String
    },
    duration:{
        type:Number
    },
    slots:{
        type:String
    },
    date:{
        type:String
    },
    price:{
        type:Number
    },
    booked:{
        type:Boolean,
        default:false
    },
    status:{
        type:String,
        default:"notStarted"
    }

},{timestamps:true})

const Class=mongoose.model("Class",classSchema)
module.exports=Class