import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './utils/dbConnect.js'
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'
import courseRoutes from './routes/courseRoutes.js'
import skillRoutes from './routes/skillRoutes.js'
import cityRoutes from './routes/cityRoutes.js'
import admissionRoutes from './routes/admissionRoutes.js'
import userRouter from './routes/userRoute.js'
dotenv.config()


const app = express()
app.use(cors())
dbConnect()

app.use(express.json())
app.use('/api/auth',authRoutes)
app.use('/api/course',courseRoutes)
app.use('/api/skill',skillRoutes)
app.use('/api/city',cityRoutes)
app.use('/api/admission',admissionRoutes)
app.use('/api/users',userRouter)

app.use('/',(req,res)=>{
    res.send("hello World")
})



app.listen(process.env.PORT,()=>{
    console.log("Server is running on port")
})