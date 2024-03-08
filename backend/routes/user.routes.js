//user routes
const {signupUser,loginUser,logoutUser}=require('../controllers/user.controller')
const express=require('express')
const auth = require('../middleware/auth')

const userRouter=express.Router()

userRouter.post('/signup',signupUser)
userRouter.post('/login',loginUser)
userRouter.get('/logout',logoutUser)

module.exports=userRouter