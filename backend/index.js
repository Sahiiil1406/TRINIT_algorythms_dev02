const express=require('express')
const cors=require('cors')
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/user.routes')
const connectDB = require('./utils/db')
const flashRouter = require('./routes/flashcard.routes')
const classRouter = require('./routes/classes.routes')
require('dotenv').config();
const app=express()
const PORT=process.env.PORT || 1406


//connectdb
connectDB()
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(cookieParser())

//routes
app.get('/',(req,res)=>{
    return res.json({
        message:'Welcome to the server'
    })
})
app.use('/user',userRouter)
app.use('/flashcard',flashRouter)
app.use("/classes",classRouter)

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})