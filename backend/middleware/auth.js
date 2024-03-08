//authenticates the user
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const auth = async (req,res,next)=>{
    try {
        const token = req.cookies.token
        if(!token){
            return res.status(401).json({status:'failed',message:'Not authorized to access this route'})
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findById(decoded.id)
        if(!user){
            return res.status(404).json({status:'failed',message:'No user found with this id'})
        }
        req.user = user
        next()
    } catch (error) {
        return res.status(401).json({status:'failed',message:'Not authorized to access this route'})
    }
}
