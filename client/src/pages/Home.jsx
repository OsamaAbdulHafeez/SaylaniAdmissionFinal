import React from 'react'
import './home.css'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Redux/UserReducers'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Container from '../Components/Container'
import Topbar from '../Components/Topbar'
const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const email = useSelector(state=>state.user.currentUser.data.email)
  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(logout(null))
    navigate('/login')
  }
  return (
    <div className='flex flex-col'>
      <Topbar />
      <Banner />
      <h1 className="font-bold text-lg lg:text-3xl my-6 text-blue-700 text-center">Available Courses</h1>
      <div className="flex flex-wrap justify-center">
        <Container/>
        
      </div>
      {/* <h1>Welcome to Home page</h1>
      <button onClick={logoutHandler}>Logout</button> */}
    </div>
  )
}

export default Home
