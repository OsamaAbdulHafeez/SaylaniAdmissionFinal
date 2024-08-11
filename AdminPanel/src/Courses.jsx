import React, { useState } from "react";

function Courses() {
  const [courseData, setCourseData] = useState({
    courseName: "",
    memberJoin: "",
    courseDuration: "",
    startingDate: "",
    lastDate: "",
    courseSkills: [],
    courseDescription: "",
    courseLevel: "",
    courseCity: "",
    courseCampus: [],
    coursePicture: "",
  });

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (skillId) => {
    if (courseData.courseSkills.includes(skillId)) {
      setCourseData({
        ...courseData,
        courseSkills: courseData.courseSkills.filter((id) => id !== skillId),
      });
    } else {
      setCourseData({
        ...courseData,
        courseSkills: [...courseData.courseSkills, skillId],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to submit the course data
    console.log(courseData);
    // Clear the form after submission
    setCourseData({
      courseName: "",
      memberJoin: "",
      courseDuration: "",
      startingDate: "",
      lastDate: "",
      courseSkills: [],
      courseDescription: "",
      courseLevel: "",
      courseCity: "",
      courseCampus: [],
      coursePicture: "",
    });
  };

  return (
    <div className="courses-page">
      <h1 className="page-title">Courses Management</h1>
      <form onSubmit={handleSubmit} className="page-form">
        <div className="form-group">
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={courseData.courseName}
            onChange={handleChange}
            placeholder="Enter Course Name"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="memberJoin">Member Join (comma separated):</label>
          <input
            type="text"
            id="memberJoin"
            name="memberJoin"
            value={courseData.memberJoin}
            onChange={handleChange}
            placeholder="Enter members joined"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseDuration">Course Duration:</label>
          <input
            type="text"
            id="courseDuration"
            name="courseDuration"
            value={courseData.courseDuration}
            onChange={handleChange}
            placeholder="Enter course duration"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="startingDate">Starting Date:</label>
          <input
            type="date"
            id="startingDate"
            name="startingDate"
            value={courseData.startingDate}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastDate">Last Date:</label>
          <input
            type="date"
            id="lastDate"
            name="lastDate"
            value={courseData.lastDate}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseSkills">Select Skills:</label>
          <select
            multiple
            id="courseSkills"
            name="courseSkills[]"
            value={courseData.courseSkills}
            onChange={(e) => handleSkillChange(e.target)}
            className="form-control"
          >
            {/* Options for skills would go here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="courseDescription">Course Description:</label>
          <textarea
            id="courseDescription"
            name="courseDescription"
            value={courseData.courseDescription}
            onChange={handleChange}
            placeholder="Describe the course"
            required
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="courseLevel">Course Level:</label>
          <select
            id="courseLevel"
            name="courseLevel"
            value={courseData.courseLevel}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value="">Select...</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="courseCity">Course City:</label>
          <select
            id="courseCity"
            name="courseCity"
            value={courseData.courseCity}
            onChange={handleChange}
            required
            className="form-control"
          >
            {/* Options for cities would go here */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="courseCampus">Course Campus:</label>
          <input
            type="text"
            id="courseCampus"
            name="courseCampus"
            value={courseData.courseCampus.join(", ")} // Convert array to string for display
            onChange={handleChange}
            placeholder="Enter campuses"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="coursePicture">Course Picture URL:</label>
          <input
            type="text"
            id="coursePicture"
            name="coursePicture"
            value={courseData.coursePicture}
            onChange={handleChange}
            placeholder="Enter picture URL"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Course
        </button>
      </form>
      <table className="page-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{/* Rows for each course */}</tbody>
      </table>
    </div>
  );
}

export default Courses;
