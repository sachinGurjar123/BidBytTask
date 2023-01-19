import React from "react";
import Slider from "react-slick";
import { TopSliderImages } from "~/data";
import { Div } from "~/style";
import { Box, Img } from "./styled";
const TopSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1.5,
    slidesToScroll: 0.5,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  // console.log(item[0].name, item[0].src, "item");
  return (
    <Div>
      <Box>
        <Slider {...settings}>
          {TopSliderImages.map((item, index) => (
            <Img key={index} src={item?.src} alt="image No loading" />
          ))}
        </Slider>
      </Box>
    </Div>
  );
};
export default TopSlider;
