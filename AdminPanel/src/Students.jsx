import React, { useState } from "react";
import axios from "axios";

// Assuming you have a function to handle form submission
async function handleSubmit(formData) {
  try {
    const response = await axios.post(
      "YOUR_BACKEND_ENDPOINT/student",
      formData
    );
    console.log(response.data);
    // Handle success (e.g., show a success message)
  } catch (error) {
    console.error(error);
    // Handle error (e.g., show an error message)
  }
}

const students = [
  {
    CNIC: "1234567890",
    email: "student1@example.com",
    name: "Student One",
    address: "Street 1, City 1",
    city: "City 1",
    isVerified: false,
  },
  {
    CNIC: "2345678901",
    email: "student2@example.com",
    name: "Student Two",
    address: "Street 2, City 2",
    city: "City 2",
    isVerified: true,
  },
  // Add more students as needed
];

function Students() {
  const [formData, setFormData] = useState({
    cnic: "",
    email: "",
    name: "",
    password: "",
    address: "",
    picture: "",
    city: "",
    isVerified: false,
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setFormData({ ...formData, isVerified: event.target.checked });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    // Reset form data after submission
    setFormData({
      cnic: "",
      email: "",
      name: "",
      password: "",
      address: "",
      picture: "",
      city: "",
      isVerified: false,
    });
  };

  return (
    <div className="students-page">
      <h1 className="page-title">Students Management</h1>
      <form onSubmit={handleSubmitForm} className="page-form">
        {/* Form Inputs */}
        <input
          type="text"
          name="cnic"
          value={formData.cnic}
          onChange={handleChange}
          placeholder="CNIC"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
        ></textarea>
        <input
          type="text"
          name="picture"
          value={formData.picture}
          onChange={handleChange}
          placeholder="Picture URL"
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
        />
        <label>
          Is Verified
          <input
            type="checkbox"
            checked={formData.isVerified}
            onChange={handleCheckboxChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <table className="page-table">
        <thead>
          <tr>
            <th>CNIC</th>
            <th>Email</th>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Is Verified</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.CNIC}</td>
              <td>{student.email}</td>
              <td>{student.name}</td>
              <td>{student.address}</td>
              <td>{student.city}</td>
              <td>{student.isVerified ? "Yes" : "No"}</td>
              <td>{/* Action buttons or links could go here */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Students;
