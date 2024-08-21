import React, { useState } from 'react';
import './RegistrationForm.css'; // Assuming you have a CSS file named Form.css
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
    const navigate = useNavigate()
    const user = useSelector(state => state.user.currentUser)
    console.log(user)
    const [formData, setFormData] = useState({
        fullName: user.name,
        email: user.email,
        cnic: user.CNIC,
        dob: '',
        address: '',
        lastQualification: '',
        fatherName: '',
        phone: '',
        fatherCnic: '',
        gender: ''
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value || e.target.checked });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`https://saylani-admission-final-backend.vercel.app/api/admission/create`,formData)
            console.log(res.data.data)
            navigate('/')
        } catch (error) {
            console.log(error)
            alert(error?.response?.data?.message)
            navigate('/')
        }
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="registration-form">
            {/* Form Fields */}
            <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
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
                name="cnic"
                value={formData.cnic}
                onChange={handleChange}
                placeholder="CNIC"
                required
            />
            <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
            />
            <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                required
            ></textarea>
            <input
                type="text"
                name="lastQualification"
                value={formData.lastQualification}
                onChange={handleChange}
                placeholder="Last Qualification"
                required
            />
            <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
            />
            <input
                type="text"
                name="fatherCnic"
                value={formData.fatherCnic}
                onChange={handleChange}
                placeholder="Father's CNIC"
            />
            <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                placeholder="Father Name"
            />
            <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Gender"
                required
            />
            <button type="submit">Register</button>
        </form>
    );
}

export default RegistrationForm;