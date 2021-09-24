import React from "react";
import "./twitter.css";
import twitter from "../../assets/images/twitter.png";
const Twitter: React.FC = () => {
  return (
    <div className="twitter">
      <img src={twitter} alt="" className="twitterImg" />
    </div>
  );
};

export default Twitter;
