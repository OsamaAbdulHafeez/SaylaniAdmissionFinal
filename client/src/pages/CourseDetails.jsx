import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Topbar from '../Components/Topbar'

const CourseDetails = () => {

  const [data,setData]=useState()
    const {id}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        async function api(){
            try {
        
                const res=await axios.get(`https://admission-portal-backend.vercel.app/api/course/getCourse/${id}`)
                console.log(res.data.data)
                setData(res?.data?.data)
              } catch (error) {
                console.log(error)
                alert(error?.response?.data?.message)
                navigate('/')
                
                
              }
        }
        api()
        console.log(data)

    },[id])
    const span = "text-gray-500 font-bold"
    const h3 = "border-b-2 font-semibold pb-2"
  return (
    <div className='flex flex-col'>
      <Topbar/>
      <h1 className="font-bold text-lg lg:text-3xl my-6 text-blue-700 text-center">{data?.courseName}</h1>
      <div className="flex flex-wrap justify-center w-[90%] mx-auto">
        <div className='w-full flex flex-col gap-3'>
            <h1 className='text-lg font-bold'>Course Details</h1>
            <div className='flex flex-col gap-2'>
                <h3 className={h3}><span className={span}>Course Name:</span> {data?.courseName}</h3>
                <h3 className={h3}><span className={span}>Course Description:</span>{data?.courseDescription}</h3>
                <h3 className={h3}><span className={span}>Course Duration: </span>{data?.courseDuration}</h3>
                <h3 className={h3}><span className={span}>Start Submission:</span> {data?.startingDate}</h3>
                <h3 className={h3}><span className={span}>Last Submission: </span>{data?.lastDate}</h3>
                {/* <h3 className={h3}><span className={span}>Course Skills:</span>{data?.courseSkills?.map((e)=> e)}</h3> */}
                <h3 className={h3}><span className={span}>Course Level:</span> {data?.courseLevel}</h3>
                <button onClick={()=>navigate('/registrationform')} className='bg-blue-600 text-white px-3 py-2 mt-3 rounded-md'>Join Now</button>
            </div>
        </div>
      </div>
      {/* <h1>Welcome to Home page</h1>
      <button onClick={logoutHandler}>Logout</button> */}
    </div>
  )
}

export default CourseDetails


function Skills({name}){
    return(
        <div >
            <h1>{name}</h1>
        </div>
    )
}
