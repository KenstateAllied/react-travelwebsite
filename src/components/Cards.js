import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Hotels in the city of Eldoret</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src="boma_eldoret.jpg"
            text="BOMA INN"
            label="safari"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="eka.jpg"
            text="THE GRAND EKA"
            label="Safari"
            path="/services/activity"
            ></CardItem>
          </ul>
          <ul className='cards__items'>
            <CardItem 
            src="starbucks.jpg"
            text="STARBUCKS"
            label="safari"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="sirikwa.jpg"
            text="SIRIKWA HOTEL"
            label="safari"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="noble.jpg"
            text="Noble HOTEL "
            label="safari"
            path="/services/activity"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
