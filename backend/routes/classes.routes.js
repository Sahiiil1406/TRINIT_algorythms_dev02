const {createClass,getClasses,getclassbyId,deleteClass,enrollInClass}=require("../controllers/classes.js")
const express=require("express")
const auth=require("../middleware/auth.js")
const classRouter=express.Router()

classRouter.post("/create",auth,createClass)
classRouter.get("/getclasses",getClasses)
classRouter.get("/getclass/:id",getclassbyId)
classRouter.get("/delete/:id",deleteClass)
classRouter.post("/enroll/:id",enrollInClass)
module.exports=classRouter