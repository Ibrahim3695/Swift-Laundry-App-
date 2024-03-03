import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./DashboardLayout.css"
import { Link } from 'react-router-dom'
import ProfileModal from '../components/ProfileModal'



const DashboardLayout = () => {
  const [showProfile, setShowProfile] = useState(false)


  return (
    <div className='mainDashboardDiv'>
      <article className='leftMainDiv'>
        <section className='logosDiv'>
          <img src="./grace.png" alt="" />

        </section>

        <section className='writeUpMiddleDiv'>
          <div className='holdWriteUp'>
            <NavLink to={"/dashboards"} className={({ isActive }) => isActive ? 'isactive' : 'isnotactive'}>
              <img src="./grace.png" alt="" />
              <p>Dashboard</p>
            </NavLink>

            <NavLink to={"/order"} className={({ isActive }) => isActive ? 'isactive' : 'isnotactive'}>
              <img src="./grace.png" alt="" />
              <p>Do Laundry</p>
            </NavLink>

            <NavLink to={"/subscribe"} className={({ isActive }) => isActive ? 'isactive' : 'isnotactive'}>
              <img src="./grace.png" alt="" />
              <p>Subscribe</p>
            </NavLink>
          </div>
        </section>

        <section className='logOutDiv'>
          <img src="logout.png" alt="" />
          <p>Log out</p>
        </section>
      </article>

      <article className='rightMainDiv'>

        <div className='topMainDiv'>
          <section className='nameDiv'>Welcome, David</section>
          <section className='iconImageDiv'>
            <article className='ICN1'></article>
            <article className='ICN2' onClick={() => setShowProfile(!showProfile)}><img src="./profile.png" alt="" /></article>
          </section>
        </div>

        <div className='bottomMainDiv'>
          <Outlet />
        </div>
      </article>


      {
        showProfile ? <ProfileModal /> : ""
      }

    </div>
  )
}

export default DashboardLayout
