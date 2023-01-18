import React from 'react';
import Slider from 'react-slick';
import { newOnBidByItem } from '../../data';
import { Title } from '../../style';
import FoodCard from './NewOnBidBytComponent';

const settings = {
  slidesToShow: 1.5,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const NewOnBidBy = () => (
  <>
    <Title>New On BidByt</Title>
    <Slider {...settings}>
      {newOnBidByItem.map((item, index) => (
        <div key={index}>
          <FoodCard {...item} />
        </div>
      ))}
    </Slider>
  </>
);

export default NewOnBidBy;
