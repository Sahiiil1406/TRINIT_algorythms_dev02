const Class=require("../models/classes.js")

const createClass=async(req,res)=>{
    const {language,duration,slots}=req.body
    if(req.user.roles!="tutor"){
        return res.status(400).
        json({status:'failed',message:'You are not authorized to create a class'})
    }
    const instructor=req.user._id
    try {
        const newclass=await Class.create({
            instructor,language,duration,slots})
        return res.status(201).json({status:'success',newclass})
    } catch (error) {            
        return res.status(400).json({status:'failed',error})
    }}


const getClasses=async(req,res)=>{
    try {
        const classes = await Class.find({booked:false})
        return res.status(200).json({status:'success',classes})
    } catch (error) {
        return res.status(400).json({status:'failed',error})
    }}

const getclassbyId=async(req,res)=>{
    const id=req.params.id
    try {
        const classes = await Class.findById(id)
        return res.status(200).json({status:'success',classes})
    } catch (error) {
        return res.status(400).json({status:'failed',error})
    }}
    
    
const deleteClass=async(req,res)=>{
    const id=req.params.id
    try {
        const classes = await Class.findByIdAndDelete(id)
        return res.status(200).json({status:'success',classes})
    } catch (error) {
        return res.status(400).json({status:'failed',error})
}}

const enrollInClass=async(req,res)=>{
    try {
        const user=req.user
        const classes=await Class.findByIdAndUpdate(req.params.id,{
            $push:{students:user._id},booked:true
        })
        return res.status(200).json({status:'success',classes})
    } catch (error) {
        return res.status(400).json({status:'failed',error})
    }
}
module.exports={
    createClass,getClasses,getclassbyId,deleteClass,enrollInClass}