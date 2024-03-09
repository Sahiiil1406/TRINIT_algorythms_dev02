const Class=require("../models/classes.js")

const createClass=async(req,res)=>{
    const {language,duration,slots,price}=req.body
    const instructor=req.user._id
    const name=req.user.name || "sample"
    try {
        const newclass=await Class.create({
            instructor,language,duration,slots,price,name})
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
const getClassesofstudent=async(req,res)=>{
    try {
        const classes = await Class.find({booked:true})
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
        const classes=await Class.findByIdAndUpdate(req.params.id,{
            booked:true
        })
        return res.status(200).json({status:'success',classes})
    } catch (error) {
        return res.status(400).json({status:'failed',error})
    }
}
module.exports={
    createClass,getClasses,getclassbyId,deleteClass,enrollInClass,
    getClassesofstudent}