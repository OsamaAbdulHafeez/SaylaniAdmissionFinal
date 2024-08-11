import express from 'express'
import { login, register, resendotp, verifyEmail } from '../controllers/authController.js'
import { verifyAdmin, VerifyToken } from '../utils/token.js'

const authRoutes = express.Router()


authRoutes.post('/register',register)
authRoutes.post('/login',login)
authRoutes.post('/verifyemail',VerifyToken,verifyEmail)
authRoutes.post('/resendOtp',resendotp)

export default authRoutes