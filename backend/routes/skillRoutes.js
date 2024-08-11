import express from 'express'
import { addSkills, deleteSkills, getAllSkills, getSkill, updateSkills } from '../controllers/skillController.js'
import { verifyAdmin } from '../utils/token.js'

const skillRoutes = express.Router()

skillRoutes.post('/add',verifyAdmin,addSkills)
skillRoutes.delete('/delete/:id',verifyAdmin,deleteSkills)
skillRoutes.put('/update/:id',verifyAdmin,updateSkills)
skillRoutes.get('/',verifyAdmin,getAllSkills)
skillRoutes.get('/:id',verifyAdmin,getSkill)


export default skillRoutes