import React from "react";
import Slider from "react-slick";
import { recommendedItems } from "~/data";
import { Div, Title } from "~/style";
import RecommendedComponent from "./RecommendedComponent";

const settings = {
  slidesToShow: 2.5,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 0.5,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const Recommended = () => (
  <Div>
    <Title>Recommended For You</Title>

    <Slider {...settings}>
      {recommendedItems.map((item, index) => (
        <div key={index}>
          <RecommendedComponent {...item} />
        </div>
      ))}
    </Slider>
  </Div>
);

export default Recommended;
