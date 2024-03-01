// import React, { useState } from 'react'
import { useState } from "react"
import "./RegisterLogin.css"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development"
import { BeatLoader } from "react-spinners"
import { Link } from 'react-router-dom'


const RegisterLogin = () => {
  const [businessName, setBusiness] = useState("")
  const [password, setpasswordBusiness] = useState("")
  const [isLoading, setIsLoading] = useState(false)




  const handleBusinessNames = (e) => {
    const newBusinessNames = e.target.value
    setBusiness(newBusinessNames)
    console.log(newBusinessNames)
  }


  const handlepasswordBusiness = (e) => {
    const newpasswordBusiness = e.target.value
    setpasswordBusiness(newpasswordBusiness)
    console.log(newpasswordBusiness)
  }


  const url = "https://swift-laundry.vercel.app/login-shop"
  const data = { business: businessName, password: password, }
  const navigate = useNavigate()



  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true)
      const response = await axios.post(url, data)
      Swal.fire({
        title: "Congratulations! You've Successfully Login To  Swift Laundry",
        text: response.data?.message,
        icon: "success"
      });
      navigate("/registerLogin")

    } catch (err) {
      if (err.response) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data?.error,
        });
      }
    } finally {
      setIsLoading(false)
    }
  }





  return (
    <>
      <form onSubmit={handleSubmitForm}>
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
              <h3>Business Email</h3>
              <input required type="text" className='BusinessNames' placeholder='Enter your business email' onChange={handleBusinessNames} />
              <h3>Password</h3>
              <input required type="text" placeholder='Enter your password' className='addresss' onChange={handlepasswordBusiness} />
            </div>

          </div>
          <button disabled={isLoading} className='signUpa' type='submit'>{isLoading ?
              <BeatLoader color="white" /> : "SignUp"}</button>
            <div className='alreadyHaveAccounta'>
              {/* <Link style={{ textDecoration: "none" }} to="/login"> */}
                <span>Already have an account?<b>Login</b></span>
              {/* </Link> */}
          </div>
        </div>

      </section>
      </form>
    </>
  )
}

export default RegisterLogin
