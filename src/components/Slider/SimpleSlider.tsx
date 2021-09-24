import React from "react";
import "./styles.css";

import Slider from "react-slick";
import chill1 from "../../assets/images/chill1.png";
import chill2 from "../../assets/images/chill2.png";
import chill3 from "../../assets/images/chill3.png";
import chill4 from "../../assets/images/chill4.png";
import chill5 from "../../assets/images/chill5.png";
import chill6 from "../../assets/images/chill6.png";

const imgs: Array<string> = [chill1, chill2, chill3, chill4, chill5, chill6];

const SimpleSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="slider-container">
      <p>
        Chilleon, that’s short for “Chillin’ Chameleon” he vanquishes work by
        chillin! For Chilleon it’s the weekend every day. Chillin’ is the way to
        go cuz there is nowhere to go. Sometimes he’s happy, sometimes mad, and
        sometimes he’s just dead... tired cuz chillin got the best of him.
      </p>
      <Slider {...settings}>
        {imgs.map((item, index) => (
          <img src={item} alt="" />
        ))}
      </Slider>
    </div>
  );
};
export default SimpleSlider;
