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
const io = new Server(8000, {
    cors: true,
  });
  
  const emailToSocketIdMap = new Map();
  const socketidToEmailMap = new Map();
  
  io.on("connection", (socket) => {
    console.log(`Socket Connected`, socket.id);
    socket.on("room:join", (data) => {
      const { email, room } = data;
      emailToSocketIdMap.set(email, socket.id);
      socketidToEmailMap.set(socket.id, email);
      io.to(room).emit("user:joined", { email, id: socket.id });
      socket.join(room);
      io.to(socket.id).emit("room:join", data);
    });
  
    socket.on("user:call", ({ to, offer }) => {
      io.to(to).emit("incomming:call", { from: socket.id, offer });
    });
  
    socket.on("call:accepted", ({ to, ans }) => {
      io.to(to).emit("call:accepted", { from: socket.id, ans });
    });
  
    socket.on("peer:nego:needed", ({ to, offer }) => {
      console.log("peer:nego:needed", offer);
      io.to(to).emit("peer:nego:needed", { from: socket.id, offer });
    });
  
    socket.on("peer:nego:done", ({ to, ans }) => {
      console.log("peer:nego:done", ans);
      io.to(to).emit("peer:nego:final", { from: socket.id, ans });
    });
  });

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