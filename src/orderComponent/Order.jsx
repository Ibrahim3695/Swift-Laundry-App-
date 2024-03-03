import React, { useState } from 'react'
import "./Order.css"
import DoLaundryModal from '../components/DoLaundryModal'
import WashModal from '../components/WashModal'


const CardDiv = ({onClick}) => {


  return (
    <div className='cardItems' onClick={onClick}>
      <article className='imageBorder'></article>

      <article className='writeWrap'>
        <p>Cleaneat Laundry</p>
        <p style={{ color: "red", fontWeight: "400", fontSize: "12px" }}>7km Away</p>
        <p style={{ fontWeight: "400", fontSize: "14px" }}>23 Badagry Road Oke oja Lagos</p>
      </article>

    </div>
  )
}

const Order = () => {
  const [showDoLaundry, setShowDoLaundry] = useState(false)

  const toggleDolaundry = () => {
    setShowDoLaundry(!showDoLaundry)
  }

  return (
    <div className='orderMainDiv'>
      <input type="text" placeholder='Search for shop' />

      <section className='doLaundryMainDiv'>
        <article className='doLaundryCardDiv'>
          <CardDiv onClick={toggleDolaundry} />
          <CardDiv onClick={toggleDolaundry}/>
          <CardDiv onClick={toggleDolaundry}/>
          <CardDiv onClick={toggleDolaundry}/>
          <CardDiv onClick={toggleDolaundry}/>
          <CardDiv onClick={toggleDolaundry}/>
          <CardDiv onClick={toggleDolaundry}/>
          <CardDiv onClick={toggleDolaundry}/>
          <CardDiv onClick={toggleDolaundry}/>
          <CardDiv onClick={toggleDolaundry}/>
          <CardDiv onClick={toggleDolaundry}/>
        </article>
      </section>

      {showDoLaundry ? <DoLaundryModal /> : ""}

    </div>
  )
}

export default Order
