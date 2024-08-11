import React, { useState } from 'react'
import './topbar.css'
import img from '../assets/imagelogo.png'
import { IoMenu } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../Redux/UserReducers.js';

const Topbar = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [visible,setVisible]=useState(false)
  return (
    <div className='main'>
        <img src={img} alt="" style={{width:"80px",height:"80px"}} />
        <h4></h4>
        <div className='rightSide'>
        <IoMenu id='men'  style={{marginTop:"13px"}} onClick={()=>setVisible(!visible)} />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmV_GMmai8gMADcJbWJgdA7VNIEN1Bx1strQ&s" style={{borderRadius:"50%",width:"50px",height:"50px", marginTop:"10px"}} alt="" />


        </div>
    <div className='sidebar' style={{display:!visible ? "none":'flex'}}>
        <ul>
            <li onClick={()=>navigate('/')}>Home</li>
            <li onClick={()=>navigate('/profile')}>Profile</li>
            <li onClick={()=>{dispatch(logout());navigate('/login')}}>logout</li>
        </ul>

        </div>

    </div>
  )
}

export default Topbar

