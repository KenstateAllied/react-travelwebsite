import React from 'react';
import CardItem from '../CardItem';
import Footer from '../Footer';

import '../../App.css';
import '../Cards.css';
import './Services.css';

export default function Services() {
  return (
    <>
      <h1 className='services'>Hotels in Eldoret</h1>
      <section className='heading'>
        <h2>Hotel rooms in town will very be limited  </h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="cicada.jpg"
              text="Cicada"
              label="Safari"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="comfy.jpg"
              text="Comfy"
              label="Safari"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="greenwood.webp"
              text="Greenwood Resort"
              label="Safari"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="pearl.jpg"
              text="The Pearl of Eldoret"
              label="Safari"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="marriot.jpg"
              text="Marriot"
              label="Safari"
              path="/services/activity"
            ></CardItem>
          </ul>
          </div>
        </div>
      </section>

      <section className='heading'>
        <h2>Book early, call price details & deals</h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="riverside.jpg"
              text="Riverside"
              label="Safari"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="babel.jpg"
              text="Babel @ West"
              label="Safari"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="relax.jpg"
              text="Relax Inn"
              label="Safari"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="samich.jpg"
              text="Samich Resort"
              label="Safari"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="comfy.jpg"
              text="Hotel Comfy"
              label="Safari"
              path="/services/activity"
            ></CardItem>
          </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  
  
  
  );
}