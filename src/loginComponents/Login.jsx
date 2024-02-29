import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div>
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
              <h3>Business Name</h3>
              <input type="text" className='BusinessNamesa' placeholder='Enter your business name'/>
              <h3>Business Address</h3>
              <input type="text" placeholder='Enter your business address' className='addresssa' />
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
    </div>
  )
}

export default Login
