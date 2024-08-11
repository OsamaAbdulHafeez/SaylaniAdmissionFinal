import mongoose from "mongoose";

const skillSchema = mongoose.Schema({
    skillName:{
        required:true,
        type:String,
        unique:true
    },
    skillIcon:{
        required:true,
        type:String
    }
},{timestamps:true})


export default mongoose.model('Skill',skillSchema)
