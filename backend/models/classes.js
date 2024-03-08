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
    duration:{
        type:Number
    },
    slots:{
        type:String
    },
    booked:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const Class=mongoose.model("Class",classSchema)
module.exports=Class