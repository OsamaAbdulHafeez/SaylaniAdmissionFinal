import express from 'express'
import { admissionForm,updateAdmissionForm } from '../controllers/admissionController.js'


const admissionRoutes = express.Router()

admissionRoutes.post('/create',admissionForm)
admissionRoutes.put('/update-admission',updateAdmissionForm)



export default admissionRoutes