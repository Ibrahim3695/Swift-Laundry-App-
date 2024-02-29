import React from 'react'
// import Header from '../headerComponents/Header'
import HeroPage from '../heroPageComponent/HeroPage'
import HowWeWork from '../howWeWorkComponent/HowWeWork'
import LaundryShop from '../laundryShopComponent/LaundryShop'
import OurOffer from '../ourOfferComponent/OurOffer'
import Plan from '../planComponent/Plan'
import Partner from '../partnerWithUsComponent/Partner'
import Testimony from '../testimonyComponent/Testimony'
import Quality from '../qualityLaudryComponent/Quality'
import Footer from '../footerComponent/Footer'

const LandingPage = () => {
  return (
    <div>
      {/* <Header/> */}
      <HeroPage/>
      <HowWeWork/>
      <LaundryShop/>
      <OurOffer/>
      <Plan/>
      <Partner/>
      <Testimony/>
      <Quality/>
      <Footer/>
    </div>
  )
}

export default LandingPage
