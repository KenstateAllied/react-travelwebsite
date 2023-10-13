import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Hotels in Magical Kenya</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src="villarosa.jpg"
            text="Nairobi"
            label="Kempinski"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="whitesand.jpg"
            text="Mombasa"
            label="Whitesands"
            path="/services/activity"
            ></CardItem>
          </ul>
          <ul className='cards__items'>
            <CardItem 
            src="royalswiss.webp"
            text="Kisumu"
            label="Royal"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="eka.jpg"
            text="Eldoret"
            label="EKA"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="sarovawoodlands.jpg"
            text="Nakuru "
            label="Sarova"
            path="/services/activity"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
