import { CREATED, FORBIDDEN, INTERNALERROR, OK } from "../constants/httpStatus.js"
import { responseMessages } from "../constants/responseMessages.js"
import courseSchema from '../models/courseModel.js'
import skillSchema from '../models/SkillsModel.js'
import citySchema from '../models/cityModels.js'

export const courseAdd = async (req, res) => {
    try {
        const { courseName, courseDuration, startingDate, lastDate, courseSkills, courseDescription, courseLevel, coursePicture, courseCity, courseCampus } = req.body
        if (!courseName || !courseDuration || !startingDate || !lastDate || !courseSkills || !courseDescription || !courseLevel || !coursePicture || !courseCity || !courseCampus) {
            return res.status(FORBIDDEN).send({
                status: false,
                message: responseMessages.MISSING_FIELDS
            })
        }
        const findCourse = await courseSchema.findOne({ courseName })
        if (findCourse) {
            return res.status(FORBIDDEN).send({
                status: false,
                message: responseMessages.COURSE_EXIST
            })
        }
        const skills = await skillSchema.find();
        const city = await citySchema.find();
        const selectedSkills = courseSkills
        const selectCity = courseCity
        const selectedCampuses = courseCampus
        const selectedskillsbyindexes = selectedSkills.map(index => skills[index]._id);
        // const selectedcitiesbyindexes = selectedCities.map(index => city[index]._id);
        const selectedcampuses = city[selectCity].cityCampus.filter((val,index) =>{
            return selectedCampuses.includes(index)
        })
        const newCourse = new courseSchema({
            ...req.body,
            courseSkills: selectedskillsbyindexes,
            courseCity: skills[selectCity]._id,
            courseCampus: selectedcampuses
        })
        const savedCourse = await newCourse.save()
        if (savedCourse.errors) {
            return res.status(FORBIDDEN).send({
                status: true,
                message: errors.message
            })
        }

        return res.status(CREATED).send({
            status: true,
            message: responseMessages.COURSE_CREATED,
            data: savedCourse
        })

    } catch (error) {
        res.status(INTERNALERROR).send({
            status: false,
            message: responseMessages.INTERNAL_ERROR_MESSAGE
        })
    }

}


export const courseDelete = async (req, res) => {
    try {
        const id = req.params.id
        await courseSchema.findByIdAndDelete({ _id: id })

        return res.status(OK).send({
            status: true,
            message: responseMessages.COURSE_DELETED,
        })

    } catch (error) {
        res.status(INTERNALERROR).send({
            status: false,
            message: responseMessages.INTERNAL_ERROR_MESSAGE
        })
    }

}

export const getCourse = async (req, res) => {
    try {
        const id = req.params.id
        const course = await courseSchema.findById({ _id: id })

        return res.status(OK).send({
            status: true,
            message: responseMessages.GET_SUCCESS_MESSAGES,
            data: course
        })

    } catch (error) {
        res.status(INTERNALERROR).send({
            status: false,
            message: responseMessages.INTERNAL_ERROR_MESSAGE
        })
    }

}


export const getAllCourse = async (req, res) => {
    try {
        const Allcourse = await courseSchema.find()

        return res.status(OK).send({
            status: true,
            message: responseMessages.GET_SUCCESS_MESSAGES,
            data: Allcourse
        })

    } catch (error) {
        res.status(INTERNALERROR).send({
            status: false,
            message: responseMessages.INTERNAL_ERROR_MESSAGE
        })
    }

}