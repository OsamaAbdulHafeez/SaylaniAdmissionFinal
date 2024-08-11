import React from 'react'
import logo from '../assets/imagelogo.png'
import avatar from '../assets/avatar.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center w-full md:px-5 bg-lime-400 gap-3 h-16'>
            <img src={logo} alt="" className='h-16 lg:h-20' />
            <span className='font-bold text-[10px] lg:text-lg text-white'>7,000+ courses, Guided Projects, Specializations, and Professional Certificates</span>
            <div>
                <img src={avatar} alt="" className='h-12 w-20 lg:h-16 '/>
            </div>
        </div>
    )
}

export default Navbar

