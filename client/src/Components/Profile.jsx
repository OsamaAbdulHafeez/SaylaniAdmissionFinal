import React from 'react'
import './profile.css'

import Topbar from './Topbar'


const Profile = () => {
  return (
  <div>
    <Topbar/>
    <div style={{height:"100vh", display:"flex",justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
       <span className='mb-2'> Please Complete Your Profile</span>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Complete Information</button></div>
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header" style={{display:"flex",justifyContent:'space-between'}}>
        <h5 className="modal-title" id="exampleModalLabel">Personal Detail</h5>
        <button type="button" className="close btn btn-primary" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form>
            <div className="form-group">
                <label for="address">Address:</label>
                <textarea id="address" name="address" required></textarea>
            </div>
            <div className="form-group">
                <label for="mobileNumber">Mobile Number:</label>
                <input type="tel" id="mobileNumber" name="mobileNumber" required/>
            </div>
            <div className="form-group">
                <label for="education">Education:</label>
                <select id="education" name="education" required>
                    <option value="">Select Education Level</option>
                    <option value="highSchool">High School</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="phd">Ph.D.</option>
                </select>
            </div>
            <div className="form-group">
                <label for="city">City:</label>
                <select id="city" name="education" required>
                    <option value="" disabled>Select  city</option>
                    <option value="karachi">karachi</option>
                    <option value="hyderabad">hyderabad</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Islamabad">Islamabad</option>
                </select>
            </div>
            <div className="form-group">
                <label for="profilePicture">Profile Picture:</label>
                <input type="file" id="profilePicture" name="profilePicture" required/>
            </div>
            <div className="form-group">
                <label for="educationDocuments">Education Documents:</label>
                <input type="file" id="educationDocuments" name="educationDocuments" multiple required/>
            </div>
           
        </form>
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>

    </div>

  )
}

export default Profile
{/* <div className="container">
        <h2>Registration Form</h2>
        <form>
            <div className="form-group">
                <label for="address">Address:</label>
                <textarea id="address" name="address" required></textarea>
            </div>
            <div className="form-group">
                <label for="mobileNumber">Mobile Number:</label>
                <input type="tel" id="mobileNumber" name="mobileNumber" required/>
            </div>
            <div className="form-group">
                <label for="education">Education:</label>
                <select id="education" name="education" required>
                    <option value="">Select Education Level</option>
                    <option value="highSchool">High School</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="phd">Ph.D.</option>
                </select>
            </div>
            <div className="form-group">
                <label for="profilePicture">Profile Picture:</label>
                <input type="file" id="profilePicture" name="profilePicture" required/>
            </div>
            <div className="form-group">
                <label for="educationDocuments">Education Documents:</label>
                <input type="file" id="educationDocuments" name="educationDocuments" multiple required/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div> */}