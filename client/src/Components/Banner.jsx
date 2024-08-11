import React from 'react'
import Banners from '../assets/Banner.jpg'
const Banner = () => {
  return (
    <div className='h-[200px] lg:h-[500px] bg-slate-400'>
      <img src={Banners} alt="" className='h-full w-full'/>
    </div>
  )
}

export default Banner
