import mongoose from "mongoose";

const citySchema = mongoose.Schema({
    cityName:{
        required:true,
        type:String,
        unique:true
    },
    cityCampus:{
        required:true,
        type:[{ type: String }]
    }
},{timestamps:true})


export default mongoose.model('cities',citySchema)
