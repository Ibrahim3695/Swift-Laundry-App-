import React from 'react'
import "./Partner.css"

const Partner = () => {
  return (
    <div className='partnerWithUsMainDiv'>
      <div className='partnersContainer'>
        <div className='containerForImage'>
          <img src="./person1.png" alt="" />
          <img src="./person2.png" alt="" className='person2'/>
        </div>
        <div className='containerForText'>
          <div className='registerBusinessContainer'>
            <p>Register Your Business</p>
            <h1>Want to Partner with us?</h1>
          </div>
          <div className='bookingContainer'>
            <h4>Online booking and appointment scheduling.</h4>
            <h4>Customer management tools.</h4>
            <h4>Integration with payment gateways.</h4>
            <h4>Marketing and promotion capabilities.</h4>
            <h4>Analytics and reporting tools.</h4>
            <h4>Customizable profiles and services.</h4>
          </div>
          <div className='registerdBtn'>
            <button className='btnForRegistration'>Registerd Business</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partner
