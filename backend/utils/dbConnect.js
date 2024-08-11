import mongoose from "mongoose";

export const dbConnect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Data Base Connected")
    } catch (error) {
        console.log(error)
    }
}