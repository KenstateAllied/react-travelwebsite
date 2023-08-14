import React from 'react';
import Footer from '../Footer';

export default function Destination() {
  return (
    <>
      <div className='destination'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h2>Explore the treasures of Maasai Mara</h2>
          <p>Up and close with the kings of the jungle!</p>

          <h3>Experience</h3>
          <h4>Highlights</h4>
          <ul>
            <li>Explore  </li>
            <li>Swim  </li>
            <li>Enjoy  </li>
            <li>Visit  </li>
          </ul>
          <h4>Full description</h4>
          <p>Explore  </p>
          <p>Hike  </p>
          <p>Waterfall. </p>
        </div>
        
      
        <div className='booking-container'>
          <div className='booking-wrapper'>
            <section className='booking-info'>
              <h5>From</h5>
              <p className='price'>ksh 15000</p>
              <p className='per-person'>per person</p>
            </section>
            <button type='button' className='btn-book'>Book now</button>
          </div>
        </div>
      
      </div>
      <Footer />
    </>
  );
}
