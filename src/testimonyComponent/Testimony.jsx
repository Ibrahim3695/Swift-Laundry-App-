import React, { useEffect, useState } from 'react';
import './Testimony.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimony = () => {
  // const [slickSettings, setSlickSettings] = useState(null);
    // useEffect(() => {
      const slickSettings = {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      
    // }, []);

  return (
    <div className='testimonyMainDiv'>
      <header className='testimoniesHeader'>
        <p>What people say</p>
        <h1>Testimonies</h1>
      </header>
      <Slider {...slickSettings}>
        <div className='testimoniesCard1'>
          <article className='profileCircle1'>
            <img src='./dani.jpg' alt='' className='daniella' />
          </article>
        </div>
        <div className='testimoniesCard2' >
          <div className='profileCircle2'>
            <img src='./dani1.jpg' alt='' className='daniella' />
          </div>
        </div>
        <div className='testimoniesCard3'>
          <div className='profileCircle3'>
            <img src='./messi;s wife.jpg' alt='' className='daniella' />
          </div>
        </div>
        <div className='testimoniesCard3'>
          <div className='profileCircle3'>
            <img src='./messi;s wife.jpg' alt='' className='daniella' />
          </div>
        </div>
        <div className='testimoniesCard3'>
          <div className='profileCircle3'>
            <img src='./messi;s wife.jpg' alt='' className='daniella' />
          </div>
        </div>
        <div className='testimoniesCard3'>
          <div className='profileCircle3'>
            <img src='./messi;s wife.jpg' alt='' className='daniella' />
          </div>
        </div>
        <div className='testimoniesCard3'>
          <div className='profileCircle3'>
            <img src='./messi;s wife.jpg' alt='' className='daniella' />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimony;
