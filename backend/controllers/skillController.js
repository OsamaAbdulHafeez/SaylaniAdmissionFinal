import { CREATED, FORBIDDEN, INTERNALERROR, OK } from "../constants/httpStatus.js"
import { responseMessages } from "../constants/responseMessages.js"
import skillSchema from '../models/SkillsModel.js'

export const addSkills = async (req, res) => {
    try {
        const { skillName } = req.body
        if (!skillName) {
            return res.status(FORBIDDEN).send({
                status: false,
                message: responseMessages.MISSING_FIELDS
            })
        }
        const findSkills = await skillSchema.findOne({ skillName })
        if (findSkills) {
            return res.status(FORBIDDEN).send({
                status: false,
                message: responseMessages.ALREADY_EXIST
            })
        }
        const newSkills = new skillSchema(req.body)
        const savedSkills = await newSkills.save()
        return res.status(CREATED).send({
            status: true,
            message: responseMessages.SKILLS_ADD,
            data: savedSkills
        })
    } catch (error) {
        return res.status(INTERNALERROR).send({
            status: false,
            message: responseMessages.INTERNAL_ERROR_MESSAGE
        })
    }
}

export const deleteSkills = async (req, res) => {
    try {
        const id = req.params.id
        await skillSchema.findByIdAndDelete({ _id: id })
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


export const updateSkills = async (req, res) => {
    try {
        const { skillName } = req.body
        const id = req.params.id
        const findSkills = await skillSchema.findOne({ skillName })
        if (findSkills) {
            return res.status(FORBIDDEN).send({
                status: false,
                message: responseMessages.ALREADY_EXIST
            })
        }
        const updateSkill = await skillSchema.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        return res.status(OK).send({
            status: true,
            message: responseMessages.UPDATE_SKILLS,
            data: updateSkill
        })
    } catch (error) {
        return res.status(INTERNALERROR).send({
            status: false,
            message: responseMessages.INTERNAL_ERROR_MESSAGE
        })
    }
}


export const getAllSkills = async (req, res) => {
    try {
        const allSkills = await skillSchema.find()

        if (!allSkills) {
            return res.status(FORBIDDEN).send({
                status: true,
                message: responseMessages.GET_UNSUCCESS_MESSAGES,
            })
        }
        return res.status(OK).send({
            status: true,
            message: responseMessages.GET_SUCCESS_MESSAGES,
            data: allSkills
        })
    } catch (error) {
        return res.status(INTERNALERROR).send({
            status: false,
            message: responseMessages.INTERNAL_ERROR_MESSAGE
        })
    }
}


export const getSkill = async (req, res) => {
    try {
        const id = req.params.id
        const skill = await skillSchema.findById({ _id: id })
        if (!skill) {
            return res.status(FORBIDDEN).send({
                status: true,
                message: responseMessages.GET_UNSUCCESS_MESSAGES,
            })
        }
        return res.status(OK).send({
            status: true,
            message: responseMessages.GET_SUCCESS_MESSAGES,
            data: skill
        })
    } catch (error) {
        return res.status(INTERNALERROR).send({
            status: false,
            message: responseMessages.INTERNAL_ERROR_MESSAGE
        })
    }
}