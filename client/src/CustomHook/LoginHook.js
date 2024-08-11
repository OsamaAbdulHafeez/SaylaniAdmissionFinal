import axios from 'axios'
import React from 'react'
import { registerSuccess } from '../Redux/UserReducers'
import { toast } from 'react-toastify'

const UseLoginHook =async (email,password,dispatch,setIsLoading,navigate) => {
    console.log(email,password)
    try {
        // setIsLoading(()=>true)
        const loginPost=await axios.post('http://localhost:5000/api/auth/login',{email,password})
        // setIsLoading(()=>false)
        console.log(loginPost)
        if(loginPost?.data?.status){
            toast.success(loginPost?.data?.message)
            // setInterval(()=>dispatch(registerSuccess(loginPost?.data?.data)),3000)
             dispatch(registerSuccess(loginPost?.data?.data))
           
            //  setInterval(()=>window.location='http://localhost:3000/',0)
        }
        else{

            return toast.info(loginPost?.data?.message)
        }
        
    } catch (error) {
        // setIsLoading(false)
        return toast.error(error?.response.data.message)
        console.log(error?.response.data.message)
        
    }

 
}

export default UseLoginHook