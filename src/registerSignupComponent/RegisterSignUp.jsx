
import React from 'react';
import "./RegisterSignUp.css"
// import { FaRegEyeSlash } from "react-icons/fa";
// import swift from "../../public/swift.png"

const RegisterSignUp = () => {
  return (
    <>
      <div className='wholebody'>
        <div className='registerdContainer'>
          <div className='registerdLogoContainer'>
            <img src="./grace.png" alt="" />
            <div className='span'>
              <h1>Registered Business</h1>
            </div>
          </div>
          <div className='inputContainers'>
            <div className='registeredInputContainer1'>
              <h3>Business Name</h3>
              <input type="text" className='BusinessName' placeholder='Enter your business name'/>
              <h3>Business Address</h3>
              <input type="text" placeholder='Enter your business address' className='address' />
            </div>
            <div className='registeredInputContainer2'>
              <div className='emailContainer'>
                <h3>Business Email</h3>
                <input type="text" className='emailInput' placeholder='Enter your business email'/>
                <h3>Password</h3>
                <input type="text" className='passwordInput' placeholder='Enter your password'/>
              </div>
              <div className='phoneNumberContainer'>
                <h3>Phone Number</h3>
                <input type="text" className='phoneNumberInput' placeholder='Enter your phone number'/>
                <h3>Confirm Password</h3>
                <input type="text" className='confirmPasswordInput' placeholder='Confirm your password'/>
              </div>
              <div></div>
            </div>
          </div>
          <div className='registeredBtnContainer'>
            <button className='signUp'>SignUp</button>
            <div className='alreadyHaveAccount'>
              <span>Already have an account? <b>Login</b></span>
            </div>
          </div>
        </div>

      </div>
    </>

  )
}

export default RegisterSignUp