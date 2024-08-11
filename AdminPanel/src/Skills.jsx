import React, { useState } from "react";

function Skills() {
  const [skillData, setSkillData] = useState({
    skillName: "",
    skillIcon: "",
  });

  const handleChange = (e) => {
    setSkillData({ ...skillData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to submit the skill data
    console.log(skillData);
    // Clear the form after submission
    setSkillData({
      skillName: "",
      skillIcon: "",
    });
  };

  return (
    <div className="skills-page">
      <h1 className="page-title">Skills Management</h1>
      <form onSubmit={handleSubmit} className="page-form">
        <div className="form-group">
          <label htmlFor="skillName">Skill Name:</label>
          <input
            type="text"
            id="skillName"
            name="skillName"
            value={skillData.skillName}
            onChange={handleChange}
            placeholder="Enter Skill Name"
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="skillIcon">Skill Icon URL:</label>
          <input
            type="text"
            id="skillIcon"
            name="skillIcon"
            value={skillData.skillIcon}
            onChange={handleChange}
            placeholder="Enter Skill Icon URL"
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Skill
        </button>
      </form>
      <table className="page-table">
        <thead>
          <tr>
            <th>Skill Name</th>
            <th>Skill Icon</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{/* Rows for each skill would go here */}</tbody>
      </table>
    </div>
  );
}

export default Skills;
