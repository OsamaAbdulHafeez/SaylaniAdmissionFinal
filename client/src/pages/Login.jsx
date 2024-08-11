import { Button, LinearProgress, TextField } from '@mui/material'
import './Login.css'
import img from '../assets/logo.png'
import img2 from '../assets/png-transparent-student-higher-education-study-skills-learning-products-people-logo-teacher-removebg-preview.png'

import React, { useRef, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import UseLoginHook from '../CustomHook/LoginHook'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [islodaing,setIsLoding]=useState(false)
  const email=useRef()
  const password=useRef()
  const dispatch=useDispatch()
const navigate=useNavigate()
  const loginHandler=async()=>{
    console.log('me login Handler Hoon')

    await UseLoginHook(email.current,password.current,dispatch,setIsLoding,navigate)
  }
  return (
    <div className='main'>
       {
        islodaing &&
         <LinearProgress /> 
      }
      {/* <div style={{display:"flex",justifyContent:"center"}}>
            <img src={img} style={{width:"300px"}} alt="" /></div> */}
            
        <div className='Wrapper'>
          <ToastContainer/>
            <form className='formclass' action="">
              <img src={img2}alt="" style={{width:"120px" ,height:"70px" ,marginTop:"80px"}} />
            <p className='title'> Student Login</p>
            <TextField id="outlined-basics" className='' onChange={(e)=>email.current=e.target.value} type='email' label="Enter Email" variant="outlined" />
            <TextField id="outlined-basics" style={{marginTop:"12px"}} className=' ' onChange={(e)=>password.current=e.target.value} type='password' label="Enter Password" variant="outlined" />
              
                <Button style={{marginTop:" 25px"}} className='button'  variant="contained" color="success"  onClick={ async()=>{await loginHandler()}}> login</Button>
            <p className='text'>Not a Member ? <span style={{color:'blue',cursor:'pointer'}} onClick={()=>navigate('/signup')}>Register</span> </p>
            </form>
        </div>
    </div>
  )
}

export default Login
