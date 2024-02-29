import React, { useState } from 'react'
import "./Signup.css"
import axios from 'axios'

const Signup = () => {

  const [firstName,setFistName] = useState(" ")
  const [lastName,setLastName] = useState(" ")
  const [email,setEmail] = useState(" ")
  const [phoneNumber,setPhoneNumber] = useState(" ")
  const [password,setPassword] = useState(" ")
  const [confirmPassword,setConfirmPassword] = useState(" ")

  const handleFirstName =(e) =>{
   const newFirstName = e.target.value
   setFistName (newFirstName)
   console.log(newFirstName)
  }

  const handleLastName =(e) =>{
   const newLastName = e.target.value
   setLastName (newLastName)
   console.log(newLastName)
  }

  const handleEmail =(e) =>{
   const newEmail = e.target.value
   setEmail (newEmail)
   console.log(newEmail)
  }

  const handlePhoneNumber =(e) =>{
   const newPhoneNumber = e.target.value
   setPhoneNumber (newPhoneNumber)
   console.log(newPhoneNumber)
  }

  const handlePassword =(e) =>{
   const newPassword = e.target.value
   setPassword (newPassword)
   console.log(newPassword)
  }

  const handleConfirmPassword =(e) =>{
   const newConfirm = e.target.value
   setConfirmPassword (newConfirm)
   console.log(newConfirm)
  }

  const url = "https://swift-laundry.onrender.com/register-User"
  const data = {firstName:firstName, lastName:lastName, email:email, password:password, confirmPassword:confirmPassword, phoneNumber:phoneNumber}
  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post (url,data)
      console.log (response.data)
    }

    catch(err){
      if (err.response) {
        console.log (err.response.data.error);
      }
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
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
              <input type="text" className='BusinessNamea' placeholder='Enter your first name' onChange={handleFirstName} />
              <h3>Last Name</h3>
              <input type="text" placeholder='Enter your last name' className='addressa' onChange={handleLastName}/>
            </div>
            <div className='registeredInputContainer2a'>
              <div className='emailContainera'>
                <h3>Email</h3>
                <input type="text" className='emailInputa' placeholder='Enter your email' onChange={handleEmail}/>
                <h3>Password</h3>
                <input type="text" className='passwordInputa' placeholder='Enter your password' onChange={handlePassword}/>
              </div>
              <div className='phoneNumberContainera'>
                <h3>Phone Number</h3>
                <input type="text" className='phoneNumberInputa' placeholder='Enter your phone number' onChange={handlePhoneNumber}/>
                <h3>Confirm Password</h3>
                <input type="text" className='confirmPasswordInputa' placeholder='Confirm your password' onChange={handleConfirmPassword}/>
              </div>
              <div></div>
            </div>
          </div>
          <div className='registeredBtnContainera'>
            <button className='signUpa' type='submit'>SignUp</button>
            <div className='alreadyHaveAccounta'>
              <span>Already have an account? <b>Login</b></span>
            </div>
          </div>
        </div>

      </div>
      </form  >
    </div>
  )
}

export default Signup
