import React from "react";
import Card from "./Card";
import SliderItem from "../SliderItem/SliderItem.component";
import "./LunchTraits.css";

const LunchTraits: React.FC = () => {
  const sliderCards = Array(10)
    .fill(10)
    .map((i, n) => <Card key={n} />);

  return (
    <div className="LunchTraits">
      <p>Chillin' Chameleon Lunch Traits</p>
      <hr className="footer_hr" style={{ width: "90%" }} />
      <p>
        Fusion | FG Skill | Eye | Back | Mouth | Nose | Body | Grip Accessory |
        Grip | BG Skill | Background Art
      </p>
      <div style={{ display: "flex" }}>
        <SliderItem
          title=""
          sliderItems={sliderCards}
          slidesToShow={
            window.innerWidth > 1500 ? 5 : window.innerWidth > 768 ? 3 : 1
          }
          slidesToScroll={1}
          arrows={true}
        />
      </div>
    </div>
  );
};

export default LunchTraits;
