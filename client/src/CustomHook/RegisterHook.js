import axios from "axios"
// import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerFailure, registerStart, registerSuccess } from "../Redux/UserReducers";



export const UseRegister=async(CNIC,name,email,password,setIsloding,dispatch,navigate)=>{
    // const dispatch=useDispatch()
    
    console.log(name,CNIC,email,password)
    if (!name||!CNIC||!email||!password){
        return toast.error('Missing Feilds')
    }
    try {   
        dispatch(registerStart())
        
        setIsloding(()=>true)
        const postUser=await axios.post('http://localhost:5000/api/auth/register',{CNIC, email, password,name })
        if(postUser?.data.status){
            setIsloding(()=>false)
            toast.success(postUser.data.message)
            dispatch(registerSuccess(postUser?.data.data,postUser?.data.token))
           
            
            // return  setInterval(()=>window.location='http://localhost:3000/otp',8000)
        }
        else{
            setIsloding(()=>false)
            dispatch(registerFailure())
            
            alert("SomeThing Wrong")
            console.log(postUser?.data)
        }
        // console.log(postUser?.status)
    } 
    catch (error) {
        alert(error)
    dispatch(registerFailure())
    setIsloding(()=>false)
    return toast.error(error)
    // alert(error)

        
    }

    // console.log(setIsloding);
    


}