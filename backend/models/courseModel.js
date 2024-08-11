import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
    unique: true
  },
  memberJoin: {
    type: [String],
    default: null,
  },
  courseDuration: {
    type: String,
    required: true
  },
  startingDate: {
    type: String,
    required: true
  },
  lastDate: {
    type: String,
    required: true
  },
  courseSkills: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill',
    required: true
  }],
  courseDescription: {
    type: String,
    required: true
  },
  courseLevel: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true
  },
  courseCity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'cities',
    required: true
  },
  courseCampus: {
    type: [String],
    required: true
  },
  coursePicture: {
    type: String,
  },
}, { timestamps: true });

export default mongoose.model('Course', courseSchema)