import React from 'react';

const courseEnrollmentReportData = [
    { courseName: 'Web Development', enrolledStudents: 150 },
    { courseName: 'Data Science', enrolledStudents: 120 },
    // Add more courses as needed
  ];
  
  const skillUsageReportData = [
    { skill: 'JavaScript', usageCount: 200 },
    { skill: 'Python', usageCount: 180 },
    // Add more skills as needed
  ];
  
  const cityCourseDistributionData = [
    { cityName: 'New York', coursesOffered: ['Web Development', 'Data Science'] },
    { cityName: 'Los Angeles', coursesOffered: ['Artificial Intelligence', 'Machine Learning'] },
    // Add more cities as needed
  ];
  

function Reports() {
  return (
    <div className="reports-page">
      <h1 className="page-title"> Reports</h1>
      <div className="report-section">
  <h2>Course Enrollment Report</h2>
  <table>
    <thead>
      <tr>
        <th>Course Name</th>
        <th>Enrolled Students</th>
      </tr>
    </thead>
    <tbody>
      {courseEnrollmentReportData.map((item, index) => (
        <tr key={index}>
          <td>{item.courseName}</td>
          <td>{item.enrolledStudents}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

<div className="report-section">
  <h2>Skill Usage Report</h2>
  <table>
    <thead>
      <tr>
        <th>Skill</th>
        <th>Usage Count</th>
      </tr>
    </thead>
    <tbody>
      {skillUsageReportData.map((item, index) => (
        <tr key={index}>
          <td>{item.skill}</td>
          <td>{item.usageCount}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

<div className="report-section">
  <h2>City-wise Course Distribution Report</h2>
  <table>
    <thead>
      <tr>
        <th>City</th>
        <th>Courses Offered</th>
      </tr>
    </thead>
    <tbody>
      {cityCourseDistributionData.map((item, index) => (
        <tr key={index}>
          <td>{item.cityName}</td>
          <td>{item.coursesOffered.join(', ')}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
}

export default Reports;
