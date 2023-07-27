import React from 'react'

import { useNavigate } from 'react-router-dom';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  let navigate = useNavigate();

  const routeChange = () => { 
    let path = '/services'; 
    navigate(path);
  }


  return (

    
    
    <div className='hero-container'>

<div className='eldy-pic'>
      <img src='/images/ugemb.jpg' alt='HOME OF CHAMPIONS' /></div>
      
      <h2>Uasin Gishu County welcomes you to the 8th Devolution Conference Aug 16-19</h2>
      <p1>Need a website? visit www.kenstate-web.netlify.app</p1>
      <p2>Click & enter your city and select dates</p2>

      <form className='search'>
          <div className='search-container'>
            <label >Hotel, Airbnb and all?</label>
            <input id='location' type='text' placeholder='Search your location' />
          </div>
          <div className='row-container'>

            <div className='search-container'>
              <label>Check in date</label>
              <input id='check-in' type='date' />
            </div>
            <div className='search-container'>
              <label>Check out date</label>
              <input id='check-out' type='date' />
            </div>

          </div>
          <div className='search-container'>
              <button
                className='hero-btn'
                type='submit'
                onClick={routeChange}
              >
                Enjoy your stay
              </button>
          </div>
      </form>
    </div>
  )
}

export default HeroSection;