import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = ({ item }) => {
  return (
    <Carousel>
      <div>
        <img className='carousel-image' src={`../goods-images/${item.images[0]}`} alt='good-image'/>
      </div>
      <div>
        <img className='carousel-image' src={`../goods-images/${item.images[1]}`} alt='good-image'/>
      </div>
      <div>
        <img className='carousel-image' src={`../goods-images/${item.images[2]}`} alt='good-image'/>
      </div>
      <div>
        <img className='carousel-image' src={`../goods-images/${item.images[3]}`} alt='good-image'/>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
