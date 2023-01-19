import React from "react";
import CategoryComponent from "./CategoryComponent";
import Slider from "react-slick";
import { categoryItems } from "~/data";
import { Div } from "~/style";

const settings = {
  slidesToShow: 6,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
};

const SmallProduct = () => (
  <Div>
    <Slider {...settings} className="TopSlider">
      {categoryItems.map((item, index) => (
        <div key={index}>
          <CategoryComponent {...item} />
        </div>
      ))}
    </Slider>
  </Div>
);
export default SmallProduct;
