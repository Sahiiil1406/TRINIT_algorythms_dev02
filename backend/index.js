const paymentRouter =require('./routes/payment.routes')
const express=require('express')
const cors=require('cors')
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/user.routes')
const connectDB = require('./utils/db')
const flashRouter = require('./routes/flashcard.routes')
const classRouter = require('./routes/classes.routes')
const {Server} = require('socket.io')
require('dotenv').config();
const app=express()
const PORT=process.env.PORT || 1406

//socket.io
const io = new Server(3000)
io.on('connection',(socket)=>{
    console.log('user connected')

    socket.on('shareId',(id)=>{
        console.log(id)

        socket.broadcast.emit('getId',id)
    })

    socket.on('disconnect',()=>{
        console.log('user disconnected')
    })
})

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
app.use("/api",paymentRouter)

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})