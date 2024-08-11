import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    CNIC:{
        required:true,
        type:String,
        unique:true
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    name:{
        required:true,
        type:String,
        minlength:3
    },
    password:{
        required:true,
        type:String,
        minlength:8
    },
    Address:{
        type:String,
    },
    picture:{
        type:String,
    },
    city:{
        type:String,

    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    otp:{
        type:String
    },
    expiresIn:{
        type:Number
    },
    isVerified:{
        type:Boolean,
        default:false
    }
},{timestamps:true})


export default mongoose.model('User',userSchema)
