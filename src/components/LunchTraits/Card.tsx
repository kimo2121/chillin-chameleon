import React from "react";
import "./LunchTraits.css";
import Elder from "../../assets/icons/Elder.svg";
const Card: React.FC = () => {
  return (
    <div className="Card">
      <img src={Elder} alt="Elder" className="Card_img" />
      <p>Name: ElderRarity: 54.33%</p>
    </div>
  );
};

export default Card;
