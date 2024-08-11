import { Button, LinearProgress, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import './otp.css'
import { useDispatch, useSelector } from 'react-redux'
import {otpResendHook, OtpVerifyHook }from '../CustomHook/OtpVerifyHook'
import { ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom';


const Otp = () => {
  const navigate=useNavigate()
  const [islodaing,setIsLoding]=useState(false)
  const token=useSelector(state=>state?.user?.currentUser)
  const email=useSelector(state=>state.user?.currentUser?._doc?.email || state?.user?.currentUser?.email)
  const otp=useRef()
  const dispatch=useDispatch()
  console.log(email)
  console.log(token?.token, otp.current ,"====> otp wala ")
  const otpSubmitHandler =async()=>{
    
    
    
    await OtpVerifyHook(token?.token,otp.current,setIsLoding,dispatch,navigate)
  }
  const otpResendHanlder=async()=>{
    await otpResendHook(email,setIsLoding)
  }
  return (
    <div>
      {
        islodaing &&
         <LinearProgress /> 
      }
      <ToastContainer />
        <div className='Wrap'>
            <img src="https://cdn-icons-png.flaticon.com/512/11500/11500580.png" alt="" style={{width:"100px", marginTop:"50px",height:'100px'}} />
            <h6 style={{fontSize:'32px',color:'blue'}}>Otp Verifcation</h6>
            <p style={{textAlign:'center', padding:'0px 30px'}}>we have sent an otp code on your gmail Account , Enter the code to get Verifcation</p>

            <form className='form3' action="" >
            <TextField id="outlined-basis" className=' ' type='text' label="Enter OTP"  variant="outlined" onChange={(e)=>{otp.current=e.target.value}} />
            <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
            <Button className='buttons'  variant="contained" color="success"  onClick={async()=>await otpSubmitHandler()}> Verify</Button>
            <Button className='buttons'  variant="contained" color="success" onClick={async()=>await otpResendHanlder()}> Resend</Button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Otp