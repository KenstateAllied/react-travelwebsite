import React from 'react'
import { Link } from 'react-router-dom';
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

      
      <p1>Need a website, app or have a software development project? </p1>visit
      
            <Link to="https://kenstate-web.netlify.app">Kenstate-web.netlify.app</Link>
                   
        
      <p2> Need to buy/ hire, cars, tractors, implements or spares? </p2>visit

      <Link to="https://autotrac.netlify.app">autotrac.netlify.app</Link>
      
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