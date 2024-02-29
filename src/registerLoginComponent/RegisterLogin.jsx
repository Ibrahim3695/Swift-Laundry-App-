import React from 'react'
import "./RegisterLogin.css"

const RegisterLogin = () => {
  return (
    <div>
      <section className='wholebodys'>
        <div className='registerdContainers'>
          <div className='registerdLogoContainers'>
            <img src="./grace.png" alt="" />
            <div className='spans'>
              <h1>Business Login</h1>
            </div>
          </div>
          <div className='inputContainerss'>
            <div className='registeredInputContainer1s'>
              <h3>Business Name</h3>
              <input type="text" className='BusinessNames' placeholder='Enter your business name'/>
              <h3>Business Address</h3>
              <input type="text" placeholder='Enter your business address' className='addresss' />
            </div>
          
          </div>
          <div className='registeredBtnContainers'>
            <button className='signUps'>Login</button>
            <div className='alreadyHaveAccounts'>
              <span>Don't have an account? <b>Register business</b></span>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default RegisterLogin
