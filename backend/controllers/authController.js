import { CREATED, FORBIDDEN, INTERNALERROR, NOTFOUND, OK, UNAUTHORIZED } from '../constants/httpStatus.js'
import UserSchema from '../models/userModel.js'
import { responseMessages } from '../constants/responseMessages.js'
import bcrypt, { compareSync } from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';
import { GenerateToken } from '../utils/token.js';
import { otp as OTP } from '../utils/otp.js';

export const register = async (req, res) => {
    
    try {
        const { CNIC, email, password,name } = req.body
        if (!CNIC || !email || !password ||!name) {
            return res.status(FORBIDDEN).send({
                status: false,
                message: responseMessages.MISSING_FIELDS
            })
        }
        const findCnic = await UserSchema.findOne({ CNIC })
        if (findCnic) {
            return res.status(FORBIDDEN).send({
                status: false,
                message: responseMessages.USER_EXISTS
            })
        }
        const salt = bcrypt.genSaltSync(10)
        const hashPassword = bcrypt.hashSync(req.body.password, salt)
        const uuid = uuidv4().slice(0, 6)
        console.log(uuid)
        const user = new UserSchema({
            ...req.body,
            password: hashPassword,
            otp: uuid,
            expiresIn: Date.now() + 60000
        })
        const userSave = await user.save()
        if (userSave.errors) {
            return res.status(FORBIDDEN).send({
                status: true,
                message: errors.message
            })
        }
        userSave.password = undefined
        await OTP(email, uuid)
        const token = GenerateToken({ data: user, expiresIn: '24h' })

        res.cookie('token', token, { http: true })
        
        res.status(CREATED).json({
            status: true,
            message: responseMessages.SUCCESS_REGISTRATION,
            data: {...userSave._doc,token}
            
        })
    } catch (error) {
        console.log(error)
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(FORBIDDEN).send({
                status: false,
                message: responseMessages.MISSING_FIELDS
            })
        }
        console.log(password)
        const findUser = await UserSchema.findOne({ email })
        if (findUser) {
            console.log(findUser)
            const checkPassword = bcrypt.compareSync(password,findUser.password)

            if (checkPassword) {
                const uuid = uuidv4().slice(0, 6)
                const token = GenerateToken({ data: findUser, expiresIn: '24h' });
                if (!findUser.isVerified) {
                    findUser.otp = uuid,
                        findUser.expiresIn = Date.now() + 60000
                    await findUser.save()
                    await OTP(email, uuid)
                    console.log(findUser)
                }
                findUser.password = undefined;
                res.cookie('token', token, { httpOnly: true });
                res.status(OK).send({
                    status: true,
                    message: 'Login Successful',
                    
                    data: {...findUser._doc,token},
                });
            } else {
                return res
                    .status(OK)
                    .send({ status: false, message: responseMessages.UN_AUTHORIZED,data:checkPassword });
            }
        }
        else {
            return res
                .status(NOTFOUND    )
                .send({ status: false, message: responseMessages.NO_USER });
        }
    } catch (error) {
        console.log(error)
    }
}

export const verifyEmail = async (req, res) => {

    console.log("middleware pass hogya")
    console.log(req.user, "==>requserhai ye")
    console.log(req.user.result, 'email')
    try {
        const { otp } = req.body

        console.log(otp ,"===> otp")
        const checkOtp = await UserSchema.findOne({ otp: otp, email: req.user.result })
        console.log(checkOtp, "==>check OTP hai ye ")
        if (checkOtp) {
            if (checkOtp?.expiresIn > Date.now()) {
                
                checkOtp.isVerified = true
                checkOtp.otp = undefined
                checkOtp.expiresIn = undefined
                
                await checkOtp.save()
               
                res.status(OK).send({
                    status: true,
                    message: "Email Verified Successfully",
                    data: checkOtp
                })
            } else {
                res.status(UNAUTHORIZED).send({
                    status: false,
                    message: "Your OTP has been expired click the resend"
                })
            }
        } else {
            res.status(FORBIDDEN).send({
                status: false,
                message: "Wrong OTP try again"
            })
        }
    } catch (error) {
        return res.status(INTERNALERROR).send({
            status: true,
            message: error.message
        })
    }
};
export const resendotp = async (req, res) => {

    const { email } = req.body
    try {
        const user = await UserSchema.findOne({ email: email })
        const otp = uuidv4().slice(0, 6);
        user.otp = otp
        user.expiresIn = Date.now() + 60000
        await user.save()
        await OTP(email, otp)
        res.status(OK).send({
            status: true,
            message: "new OTP Send to email",
            data: user
        })
    } catch (error) {
        return res.status(INTERNALERROR).send({
            status: true,
            message: error.message
        })
    }
};