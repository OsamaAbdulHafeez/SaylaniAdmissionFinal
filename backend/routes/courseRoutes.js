import express from 'express'
import { courseAdd, courseDelete, getAllCourse, getCourse } from '../controllers/courseController.js'
import { verifyAdmin } from '../utils/token.js'


const courseRoutes= express.Router()


courseRoutes.post('/addCourse',verifyAdmin,courseAdd)
courseRoutes.delete('/deleteCourse/:id',verifyAdmin,courseDelete)
courseRoutes.get('/getCourse/:id',getCourse)
courseRoutes.get('',getAllCourse)



export default courseRoutes