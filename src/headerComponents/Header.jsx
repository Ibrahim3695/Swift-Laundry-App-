import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import { Link } from "react-scroll"
const Header = () => {
  return (
    <div className='HeaderMainDiv'>
      <section className='logoDiv'>
        <img src="./grace.png" alt="" className='swiftLaundryLogo' />
      </section>

      <section className='writeUpDiv'>
        <ul>
          <Link

            // activeClass='active'
            smooth={true}
            offset={-100}
            duration={500}
            to='home'
          >
            <NavLink to="/"
              className={({ isActive, isPending }) => isActive ? "active" : "inactive"}>Home</NavLink>
          </Link>
          <NavLink to="/shopPage"
            className={({ isActive, isPending }) => isActive ? "active" : "inactive"}>Shops</NavLink>
          <Link

            smooth={true}
            offset={-100}
            duration={500}
            to='offer'>
            <NavLink 
              className={({ isActive, isPending }) => isActive ? "active" : "inactive"}>Offers</NavLink>
          </Link>
          <Link
            smooth={true}
            offset={-100}
            duration={500}
            to='plans'
          >
            <NavLink
              className={({ isActive, isPending }) => isActive ? "active" : "inactive"}>Plans</NavLink>
          </Link>
          <NavLink to="/aboutPage"
            className={({ isActive, isPending }) => isActive ? "active" : "inactive"}>About</NavLink>
          <NavLink to="contactPage/"
            className={({ isActive, isPending }) => isActive ? "active" : "inactive"}>Contact</NavLink>
        </ul>
      </section>

      <section className='btnDiv'>
        <button className='loginButton'>Login</button>
        <button className='signUpButton'>Sign up</button>
      </section>

      <section className='burgerIconImage'>
        <img src="./burger.png" alt="" />
      </section>
    </div>
  )
}

export default Header
