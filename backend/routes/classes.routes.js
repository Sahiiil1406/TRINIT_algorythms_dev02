const {createClass,getClasses,getclassbyId,deleteClass,enrollInClass,
    getClassesofstudent}=require("../controllers/classes.js")
const express=require("express")
const auth=require("../middleware/auth.js")
const classRouter=express.Router()

classRouter.post("/create",auth,createClass)
classRouter.get("/getclasses",getClasses)
classRouter.get("/getclassesofStudent",getClassesofstudent)
classRouter.get("/getclass/:id",getclassbyId)
classRouter.get("/delete/:id",deleteClass)
classRouter.get("/enroll/:id",enrollInClass)
module.exports=classRouter