//models for flashcard
const mongoose=require("mongoose")
const User=require("./user.model.js")

const flashcardSchema=new mongoose.Schema({
   createdBy:{
    type:mongoose.Types.ObjectId,
    ref:User
   },
   title:{
    type:String
   },
   content:{
    type:String
   },
   language:{
    type:String
   }
},{timestamps:true})

const Flashcard=mongoose.model("Flashcard",flashcardSchema)
module.exports=Flashcard