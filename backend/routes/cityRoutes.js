import express from 'express'
import { verifyAdmin } from '../utils/token.js'
import { addCity, deleteCity, getAllCities, getCity, updateCity } from '../controllers/cityController.js'

const cityRoutes = express.Router()

cityRoutes.post('/add',verifyAdmin,addCity)
cityRoutes.delete('/delete/:id',verifyAdmin,deleteCity)
cityRoutes.put('/update/:id',verifyAdmin,updateCity)
cityRoutes.get('/',verifyAdmin,getAllCities)
cityRoutes.get('/:id',verifyAdmin,getCity)


export default cityRoutes