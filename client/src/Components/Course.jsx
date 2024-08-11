import React, { useEffect } from 'react'
import Course1 from '../assets/Course1.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Aos
 from 'aos'
import 'aos/dist/aos.css'
const Course = ({data}) => {
    const navigate = useNavigate()
    const user = useSelector(state => state.user.cuurentUser)
    useEffect(() => {
        Aos.init({ duration: '1000', delay: "500" })
    }, [user])
    console.log("course ==>", data)
    return (
        // <div className='course'  data-aos="fade-up" data-aos-once={false}>
        //     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7H5_B5oK-t3STzuRKwEGom-g_I8Cw3W8ug&s" alt="" />
        //     <div style={{display:"flex",flexDirection:'column', justifyContent:'space-between'}}>
        //         <h5 style={{textAlign:'center'}}>{data.courseName}</h5>
        //         <p style={{textAlign:'center'}}>{data?.courseDescription}</p>
        //         <div style={{display: "flex"}}>
        //             <button className='btn1' onClick={()=>navigate(`/course/${data?._id}`)} >Explore</button>
        //             <button className='btn1' style={{padding:'10px 15px'}}>Join</button>
        //         </div>
        //     </div>

        // </div>
        <div onClick={() => navigate(`/course/${data?._id}`)} className='w-[80%] lg:w-[25%] border-gray-300 border-2 bg-white rounded-lg p-2 my-2 xl:mx-7'>
            <img src={Course1} alt="" className='w-full' />
            <div className='my-2 flex flex-col gap-2'>
                <h2 className='font-bold text-xl my-2 text-center'>{data.courseName}</h2>
                <div className='flex flex-col items-center'>
                    <h2 className='flex gap-2'><span className='font-bold text-gray-500'>Course Level:</span>{data.courseLevel}</h2>
                    <h3 className='flex gap-2'><span className='font-bold text-gray-500'>Duration:</span> {data.courseDuration}</h3>
                </div>
            </div>
        </div>
    )
}

export default Course
