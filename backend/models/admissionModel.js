import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
    fullName: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    cnic: { 
        type: String, 
        required: true 
    },
    dob: { 
        type: Date, 
        required: true 
    },
    address: { 
        type: String,
        required: true 
    },
    lastQualification: { 
        type: String, 
        required: true 
    },
    fatherName: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: String, 
        required: true 
    },
    fatherCnic: { 
        type: String 
    },
    gender: { 
        type: String, 
        required: true 
    }
  });

  export default mongoose.model('Admission', admissionSchema)