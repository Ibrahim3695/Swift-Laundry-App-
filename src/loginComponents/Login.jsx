import React, { useState } from 'react'
import "./Login.css"

const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleEmail = (e) =>{
    const yourEmail = e.target.value
    setEmail (yourEmail) 
    console.log (yourEmail)
  }

  const handlePassword = (e) => {
    const yourPasword = e.target.value
    setPassword (yourPasword)
    console.log (yourPasword)
  }

  return (
    <div>
      <form>
        <section className='wholebodysa'>
        <div className='registerdContainersa'>
          <div className='registerdLogoContainersa'>
            <img src="./grace.png" alt="" />
            <div className='spansa'>
              <h1> Login</h1>
            </div>
          </div>
          <div className='inputContainerssa'>
            <div className='registeredInputContainer1sa'>
              <h3>Email</h3>
              <input type="text" className='BusinessNamesa' placeholder='Enter your email' onChange={handleEmail}/>
              <h3>Password</h3>
              <input type="text" placeholder='Enter your password' className='addresssa' onChange={handlePassword} />
            </div>
          
          </div>
          <div className='registeredBtnContainersa'>
            <button className='signUpsa'>Login</button>
            <div className='alreadyHaveAccountsa'>
              <span>Don't have an account? <b>Sign up</b></span>
            </div>
          </div>
        </div>

      </section>
      </form>
    </div>
  )
}

export default Login
