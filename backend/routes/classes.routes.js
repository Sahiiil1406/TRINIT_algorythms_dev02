const {createClass,getClasses,getclassbyId,deleteClass,enrollInClass}=require("../controllers/classes.js")
const express=require("express")
const auth=require("../middleware/auth.js")
const classRouter=express.Router()

classRouter.post("/create",auth,createClass)
classRouter.get("/getclasses",auth,getClasses)
classRouter.get("/getclass/:id",auth,getclassbyId)
classRouter.get("/delete/:id",auth,deleteClass)
classRouter.post("/enroll/:id",auth,enrollInClass)
module.exports=classRouter