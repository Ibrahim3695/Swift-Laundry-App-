import React from 'react'
import "./Testimony.css"

const Testimony = () => {
  return (
    <div className='testimonyMainDiv'>
      <header className='testimoniesHeader'>
        <p>What people say</p>
        <h1>Testimonies</h1>
      </header>
      <div className='testimoniesContainer'>
        <div className='testimoniesCard1'>
          <article className='profileCircle1'></article>
          {/* <div className='divbg'>
          <h1>good</h1>
          </div> */}
        </div>
        <div className='testimoniesCard2'>
          <div className='profileCircle2'></div>
        </div>
        <div className='testimoniesCard3'>
          <div className='profileCircle3'></div>
        </div>
      </div>
    </div>
  )
}

export default Testimony
