//authenticates the user
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const auth = async (req,res,next)=>{
    try {
        
        const token = req.cookies.token
        console.log("1")
        console.log(token)
        if(!token){
            return res.status(450).json({status:'failed',message:'Not authorized to access this route,sahil'})
        } 
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findById(decoded.id)
        if(!user){
            return res.status(404).json({status:'failed',message:'No user found with this id'})
        }
        req.user = user
        console.log('auth',req.user)
        next()
    } catch (error) {
        return res.status(401).json({status:'failed',message:'Not authorized to access this route'})
    }
}
module.exports = auth