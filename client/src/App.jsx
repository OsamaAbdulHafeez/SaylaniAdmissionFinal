import { Link } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import './App.css'

import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Otp from './pages/Otp'
import Profile from './Components/Profile'
import { useSelector } from 'react-redux';
import CourseDetails from './pages/CourseDetails';
import RegistrationForm from './pages/RegistrationForm';


function App() {

  // const user = JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
  let user1
  try {
    const persistRoot = localStorage.getItem('persist:root');
    if (persistRoot) {
      const persistRootParsed = JSON.parse(persistRoot);
      if (persistRootParsed.user) {
        user1 = JSON.parse(persistRootParsed.user);
        console.log(user1)
      }
    }
  } catch (error) {
    console.error('Error parsing token from localStorage', error);
  }

  const user = useSelector(state=>state.user)
  console.log(user)
  return (
    <div className='bg-slate-200 min-h-screen'>
      <Router>
        {/* <Routes>
          <Route path='/signup' element={user?.isLogging ? <Navigate to={'/'} /> : <Signup />} />
          <Route path='/login' element={user?.isLogging ? <Navigate to={'/'} /> : <Login />} />
          <Route path='/verifyemail' element={user?.isLogging ? <Navigate to={'/'} /> : <Verify/>}/>
          <Route path='/courseDetails' element={user?.isLogging ? <Navigate to={'/'} /> : <CourseDetails/>}/>
          <Route path='/' element={user?.currentUser?.data?.isVerified ? <Home /> : <Navigate to={'/login'} />} />
          <Route path='/' element={user ? <Home /> : <Navigate to={'/login'} />} />
        </Routes> */}
        <Routes>


          <Route path="/login" element={user?.isLogging ? <Navigate to={'/'} /> : <Login />} />
          {/* <Route path="/next" element={user?.isLogging ? <Navigate to={'/'} /> : <Next />}/> */}


          <Route path="/otp" element={user?.currentUser?.isVerified || user?.currentUser?._doc?.isVerified ? <Navigate to={'/'} /> : !(user?.isLogging) ? <Navigate to={'/login'} /> : <Otp/>} />

          <Route path="/signup" element={user?.isLogging ? <Navigate to={'/'} /> : <Register/>} />


          <Route exact path="/" element={user?.currentUser?.isVerified || user?.currentUser?._doc?.isVerified ? <Home/> : <Navigate to={'/otp'} />} />


          <Route path="/profile" element={user?.currentUser?._doc?.isVerified || user?.currentUser?.isVerified ? <Profile/> : user?.currentUser == null ? <Navigate to={'/login'} /> : <Navigate to={'/otp'} />} />


          <Route path="/registrationform" element={<RegistrationForm/>} />


          <Route path="/course/:id" element={user?.currentUser?._doc?.isVerified || user?.currentUser?.isVerified ? <CourseDetails/> : user?.currentUser == null ? <Navigate to={'/login'} /> : <Navigate to={'/otp'} />} />


          {/* <Route path="/courseDetails" element={user?.currentUser?._doc?.isVerified || user?.currentUser?.isVerified ? <CourseDetails/> : user?.currentUser == null ? <Navigate to={'/login'} /> : <Navigate to={'/otp'} />} /> */}

          
          {/* <Route exact path="/coursedetails" element={user?.currentUser?.isVerified || user?.currentUser?._doc?.isVerified ? <Next /> : <Navigate to={'/otp'} />} /> */}

        </Routes>
      </Router>
    </div>
  )
}

export default App
