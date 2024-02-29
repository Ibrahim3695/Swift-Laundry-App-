import React from 'react'
import { Outlet } from 'react-router-dom'
import "./DashboardLayout.css"
import { Link } from 'react-router-dom'



const DashboardLayout = () => {
  return (
    <div className='mainDashboardDiv'>
      <article className='leftMainDiv'>
        <section className='logosDiv'>
          <img src="./grace.png" alt="" />

        </section>

        <section className='writeUpMiddleDiv'>
          <div className='holdWriteUp'>
            <Link to={"/dashboards"} className='dashboard1'>
              <img src="./grace.png" alt="" />
              <p>Dashboard</p>
            </Link>

            <Link to={"/order"} className='order1'>
              <img src="./grace.png" alt="" />
              <p>Order</p>
            </Link>

            <Link to={"/subscribe"} className='subscribe1'>
              <img src="./grace.png" alt="" />
              <p>Subscribe</p>
            </Link>
          </div>
        </section>

        <section className='logOutDiv'></section>
      </article>

      <article className='rightMainDiv'>

        <div className='topMainDiv'>

        </div>

        <div className='bottomMainDiv'>
          <Outlet />
        </div>
      </article>
    </div>
  )
}

export default DashboardLayout
