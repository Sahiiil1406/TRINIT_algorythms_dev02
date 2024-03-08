const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const signupUser=async(req,res)=>{
    const {name,email,password}=req.body
    try {
        const user = await User.create({name,email,password})
        return res.status(201).json({status:'success',user})
    } catch (error) {            
        return res.status(400).json({status:'failed',error})
    }}

//login
const loginUser=async(req,res)=>{
    const {email,password}=req.body
    try {
        const user = await User.findOne({  
            email
        })
        if(!user){
            return res.status(400).json({status:'failed',message:'User not found'})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({status:'failed',message:'Invalid credentials'})
        }
        console.log("1")
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRE
        })
        const cookieOptions={
            expires:new Date(Date.now()+24*60*60*1000),
            httpOnly:true
        }
        
        res.cookie('token',token,cookieOptions)
        return res.status(200).json({status:'success',token})
    }   
    catch (error) {
        return res.status(400).json({status:'failed',error})
    }
}
//logout
const logoutUser=async(req,res)=>{
    res.cookie('token','none',{
        expires:new Date(Date.now()+10*1000),
        httpOnly:true
    })
    return res.status(200).json({status:'success',data:{}})
}

module.exports={signupUser,loginUser,logoutUser}