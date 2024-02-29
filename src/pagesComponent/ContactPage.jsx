import React from 'react'
import "./ContactPage.css"

const ContactPage = () => {
  return (
    <>
    <div className='contactbody'>
      <div className='contactusdiv'>
        <h1>CONTACT US</h1>
      </div>
      <div className='contactusinput'>
        <div className='firstnameinput'>
          <span>First Name*</span>
          <input type="text" name="" id="" />
        </div>
        <div className='lastnameinput'> 
        <span>Last Name*</span>
        <input type="text" name="" id="" />
        </div>
      </div>
      
    </div>
    </>
  )
}

export default ContactPage
