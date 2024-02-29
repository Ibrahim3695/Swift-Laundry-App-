import React, { useState } from 'react'
import "./SignUp.css"

const Signup = () => {

  const [firstName,setFistName] = useState(" ")

  return (
    <div>
      <div className='wholebodya'>
        <div className='registerdContainera'>
          <div className='registerdLogoContainera'>
            <img src="./grace.png" alt="" />
            <div className='spana'>
              <h1>Sign up</h1>
            </div>
          </div>
          <div className='inputContainersa'>
            <div className='registeredInputContainer1a'>
              <h3>First Name</h3>
              <input type="text" className='BusinessNamea' placeholder='Enter your first name' />
              <h3>Last Name</h3>
              <input type="text" placeholder='Enter your last name' className='addressa' />
            </div>
            <div className='registeredInputContainer2a'>
              <div className='emailContainera'>
                <h3>Email</h3>
                <input type="text" className='emailInputa' placeholder='Enter your email' />
                <h3>Password</h3>
                <input type="text" className='passwordInputa' placeholder='Enter your password' />
              </div>
              <div className='phoneNumberContainera'>
                <h3>Phone Number</h3>
                <input type="text" className='phoneNumberInputa' placeholder='Enter your phone number' />
                <h3>Confirm Password</h3>
                <input type="text" className='confirmPasswordInputa' placeholder='Confirm your password' />
              </div>
              <div></div>
            </div>
          </div>
          <div className='registeredBtnContainera'>
            <button className='signUpa'>SignUp</button>
            <div className='alreadyHaveAccounta'>
              <span>Already have an account? <b>Login</b></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Signup
