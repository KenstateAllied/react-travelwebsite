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
      <img src='/images/kericho.jpg' alt='MAGICAL KENYA' /></div>
      
      <h2>COUNTY OF KERICHO 035 WELCOMES YOU TO THE MASHUJAA DAY 2023</h2>

      <p1> We are currently looking for bnb rooms around kericho and Bomet counties</p1>

      <p1> Have some whatsapp us </p1>

      <p1>Need a website or app? </p1>
        
        <p1>visit https://kenstate-web.netlify.app and make an order</p1>

      <p2> Need to hire a car? Shopping for automobiles, tractors or spares? </p2>
      
      <p2> visit https://autotrac.netlify.app  </p2>

      <form className='search'>
          <div className='search-container'>
            <label >Looking for Hotel, Airbnb and all? </label>
            <input id='location' type='text' placeholder='Click to Search' />
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
                Select & Enjoy your stay
              </button>
          </div>
      </form>
    </div>
  )
}

export default HeroSection;