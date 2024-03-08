const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    roles:{
        type:String,
        enum:["user","tutor"]
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
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
    }
    next();
});

const User=mongoose.model('User',userSchema)
module.exports=User
