import React, { useEffect, useState } from 'react'
import './container.css'
import Course from './Course'
import axios from 'axios'
import { useSelector } from 'react-redux'
const Container = () => {
  const user=useSelector(state=>state.user?.currentUser?._doc|| state.user?.currentUser)
  const [data,setData]=useState([]);
  
  // let b=[1,2,3,4,5]
  useEffect(()=>{
    async function api(){
      try {
        
        const res=await axios.get('https://admission-portal-backend.vercel.app/api/course')
        console.log(res.data)
        setData(()=>res?.data?.data)
      } catch (error) {
        console.log(error)
        
      }
      console.log(data)
    }
    api()
  },[user])
  return (
    <div style={{zIndex:1}}>
        <h4 className='mx-3 text-2xl font-bold'>Welcome, {user?.name ||'Anonymus'}</h4>
        <div className='mainCourse'>
         
          {data?.map((e,i)=>(
            
           <Course key={i} data={e} />
          
))}


        </div>
    </div>
  )
}

export default Container