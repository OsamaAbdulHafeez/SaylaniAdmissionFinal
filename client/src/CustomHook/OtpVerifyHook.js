import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';

import { toast } from 'react-toastify';
import { verifiedFailure, verifiedStarted, verifiedSuccess } from '../Redux/UserReducers';



const OtpVerifyHook = async(Token,otp,setIsLoding,dispatch,navigate) => {
    

    
try {
    dispatch(verifiedStarted)
    // setIsLoding(()=>true)
    
    const otpPost=await axios.post('https://admission-portal-backend.vercel.app/api/auth/verifyemail',{otp},{headers:{token:`Bearer ${Token}`}})
    
    
    // setIsLoding(()=>false)
    toast.success(otpPost?.data.message)
    dispatch(verifiedSuccess(otpPost?.data.data))
    // return setInterval(()=>window.location='http://localhost:3000/',7000)
    
} catch (error) {
    // setIsLoding(()=>false)
    toast.error(error?.response.data.message)
    dispatch(verifiedFailure())
    
}
    // alert(otp,Token)
    console.log(otp,Token,"===>  otp")
    console.log('hello')
 
}


const otpResendHook=async(email,setIsLoding)=>{
    console.log(email)
    try {
        setIsLoding(()=>true)
        const resendOtp=await axios.post('https://admission-portal-backend.vercel.app/api/auth/resendOtp',{email})
        toast.success(resendOtp?.data.message)
        setIsLoding(()=>false)
        
    } catch (error) {
        setIsLoding(()=>false)
    toast.error(error?.response.data.message)
        
    }



}
export {otpResendHook,OtpVerifyHook}
