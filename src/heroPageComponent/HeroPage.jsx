import React from 'react'
import "./HeroPage.css"
// import lanndingpic from "../../public/lanndingpic"

const HeroPage = () => {
  return (
    <div id='home' className='heroPageMainDiv'>
      <section className='leftDiv'>
        <article className='leftHold'>
          <h1>A <samp className='conv'>Convenient</samp> Solution For All Your <span>Laundry</span> Needs.</h1>
          <p>Discover a wide range of services tailored to your laundry needs. From wash-and-fold to dry cleaning, our trusted partners ensure impeccable results every time.</p>
          <button className='getStartedButton'>Get started</button>
        </article>
      </section>

      <section className='rightDiv'>
        <img src="lanndingpic.png" alt="" />
      </section>
    </div>
  )
}

export default HeroPage
