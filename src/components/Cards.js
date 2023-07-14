import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these epic destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src="salion.jpg"
            text="See what South Africa has to offer"
            label="Adventure"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="tz.jpg"
            text="Tanzania twasema karibu!"
            label="Safari"
            path="/services/activity"
            ></CardItem>
          </ul>
          <ul className='cards__items'>
            <CardItem 
            src="senegal.jpg"
            text="Senegal in style"
            label="Adventure"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="ug.jpg"
            text="Uganda na kiganda"
            label="Mystery"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="ng.jpg"
            text="Nigeria it is"
            label="Adrenaline"
            path="/services/activity"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
