import { CREATED, FORBIDDEN, INTERNALERROR, OK } from "../constants/httpStatus.js"
import { responseMessages } from "../constants/responseMessages.js"
import citySchema from '../models/cityModels.js'

export const addCity = async (req, res) => {
    try {
        const { cityName, cityCampus } = req.body
        if (!cityName) {
            return res.status(FORBIDDEN).send({
                status: false,
                message: responseMessages.MISSING_FIELDS
            })
        }
        const findCity = await citySchema.findOne({ cityName })
        if (findCity) {
            return res.status(FORBIDDEN).send({
                status: false,
                message: responseMessages.ALREADY_EXIST
            })
        }
        const newCity = new citySchema(req.body)
        const savedCity = await newCity.save()
        return res.status(CREATED).send({
            status: true,
            message: responseMessages.ADD_SUCCESS_MESSAGES,
            data: savedCity
        })
    } catch (error) {
        return res.status(INTERNALERROR).send({
            status: false,
            message: responseMessages.INTERNAL_ERROR_MESSAGE
        })
    }
}

export const deleteCity = async (req, res) => {
    try {
        const id = req.params.id
        await citySchema.findByIdAndDelete({ _id: id })
        return res.status(OK).send({
            status: true,
            message: responseMessages.DELETED_SUCCESS_MESSAGES,
        })
    } catch (error) {
        return res.status(INTERNALERROR).send({
            status: false,
            message: responseMessages.INTERNAL_ERROR_MESSAGE
        })
    }
}


export const updateCity = async (req, res) => {
    try {
        const { cityName, cityCampus } = req.body
        const id = req.params.id
        const findCity = await citySchema.findOne({ cityName })
        if (findCity) {
            return res.status(FORBIDDEN).send({
                status: false,
                message: responseMessages.ALREADY_EXIST
            })
        }
        const findCampuses = await citySchema.findById({ _id: id })
        if(findCampuses.cityCampus.includes(cityCampus)){
            return res.status(FORBIDDEN).send({
                status: false,
                message: responseMessages.CAMPUSES_EXIST
            })
        }
        const updateCampus = [...findCampuses.cityCampus,...cityCampus]
        const obj = {
            cityName: req.body.cityName || findCampuses.cityName,
            cityCampus : updateCampus
        }
        const updateCity = await citySchema.findByIdAndUpdate(id, { $set: obj }, { new: true })
        return res.status(OK).send({
            status: true,
            message: responseMessages.UPDATE_CAMPUSES,
            data: updateCity
        })
    } catch (error) {
        return res.status(INTERNALERROR).send({
            status: false,
            message: responseMessages.INTERNAL_ERROR_MESSAGE
        })
    }
}


export const getAllCities = async (req, res) => {
    try {
        const allCities = await citySchema.find()

        if (!allCities) {
            return res.status(FORBIDDEN).send({
                status: true,
                message: responseMessages.GET_UNSUCCESS_MESSAGES,
            })
        }
        return res.status(OK).send({
            status: true,
            message: responseMessages.GET_SUCCESS_MESSAGES,
            data: allCities
        })
    } catch (error) {
        return res.status(INTERNALERROR).send({
            status: false,
            message: responseMessages.INTERNAL_ERROR_MESSAGE
        })
    }
}


export const getCity = async (req, res) => {
    try {
        const id = req.params.id
        const city = await citySchema.findById({ _id: id })
        if (!city) {
            return res.status(FORBIDDEN).send({
                status: true,
                message: responseMessages.GET_UNSUCCESS_MESSAGES,
            })
        }
        return res.status(OK).send({
            status: true,
            message: responseMessages.GET_SUCCESS_MESSAGES,
            data: city
        })
    } catch (error) {
        return res.status(INTERNALERROR).send({
            status: false,
            message: responseMessages.INTERNAL_ERROR_MESSAGE
        })
    }
}