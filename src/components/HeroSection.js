import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom';
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

     

     
      
      <Link to="https://kenstate-web.netlify.app">
      <p1>Need a website, app or have a software development project? Click to visit kenstate.netlify.app</p1>
      </Link><br />
    
      <Link to="https://autotrac.netlify.app">      
      <p2> Need to buy/ hire, cars, tractors, implements or spares? Click to visit autotrac.netlify.app </p2>
      </Link><br />
      

      

      <p3>or call whatsapp +254 724 052 417</p3>
      
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