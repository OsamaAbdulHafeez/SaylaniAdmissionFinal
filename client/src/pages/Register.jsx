import React, { useRef, useState } from 'react'
import './register.css'
import { Button, LinearProgress, Modal, TextField } from '@mui/material'
import img from '../assets/logo.png'
import { UseRegister } from '../CustomHook/RegisterHook'
import { ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { registerStart } from '../Redux/UserReducers'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const data = useSelector(state => state.users)
    console.log(data);
    const [islodaing, setIsLoding] = useState(false)
    const cnic = useRef()
    const name = useRef()
    const email = useRef()
    const password = useRef()
    async function apiCall() {
        await UseRegister(cnic.current, name.current, email.current, password.current, setIsLoding, dispatch, navigate)

    }
    return (
        <div className='main'>
            {
                islodaing &&
                <LinearProgress />
            }
            <ToastContainer />
            <div className='wrapper'>
                <div className='right d-flex w-100 w-md-50  '>
                    <img style={{ marginBottom: "20px", width: "300px",height:'100px' }} src={img} alt="" />
                    <h4 className='title'>Student Registration</h4>
                    <form className='form' action="">
                        <TextField onChange={(e) => cnic.current = e.target.value} id="outlined-basic" className=' ' type='number' label="Enter CNIC NUMBER" variant="outlined" />
                        <TextField onChange={(e) => name.current = e.target.value} id="outlined-basic" className=' ' type='text' label="Your Name" variant="outlined" />
                        <TextField onChange={(e) => email.current = e.target.value} id="outlined-basic" className=' ' type='email' label="Your Email" variant="outlined" />
                        <TextField onChange={(e) => password.current = e.target.value} id="outlined-basic" className=' ' type='password' label="Enter Password" variant="outlined" />

                        <Button className='button' variant="contained" color="success" onClick={() => { apiCall() }}> signup</Button>
                        <p>Already Member (Go to <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => navigate('/login')}>Login</span>)</p>
                    </form>
                </div>

            </div>



        </div>
    )
}

export default Register