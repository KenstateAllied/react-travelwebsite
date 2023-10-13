import React from 'react';
import CardItem from '../CardItem';
import Footer from '../Footer';

import '../../App.css';
import '../Cards.css';
import './Services.css';

export default function Services() {
  return (
    <>
      <h1 className='services'>Hotels in kenya </h1>
      <section className='heading'>
        <h2>Wherever you are in Kenya you can use our portal to book for a hotel conveniently </h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="teaH.jpg"
              text="Kericho"
              label="Kericho Tea Hotel"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="royal.jpg"
              text="Bungoma"
              label="Royal"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="park.jpg"
              text="Embu"
              label="Park"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="nomad.jpg"
              text="Garissa"
              label="Nomad"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="coldsprings.jpg"
              text="Homa Bay"
              label="Cold Springs"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="golf.jpg"
              text="Kakamega"
              label="Golf"
              path="/services/activity"
            ></CardItem>
          </ul>
          </div>
        </div>
      </section>

      <section className='heading'>
        <h2>Call for price details & deals</h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="phoenicia.jpg"
              text="Kiambu"
              label="Phoenicia"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="abai.jpg"
              text="Kirinyaga"
              label="Abai"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="royalswiss.webp"
              text="Kisumu"
              label="Royal Swiss"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="samich.jpg"
              text="Elgeyo Marakwet"
              label="Samich Resort"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="sankara.jpg"
              text="Nairobi"
              label="Sankara"
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