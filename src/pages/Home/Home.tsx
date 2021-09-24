import React from "react";
import Chillin from "../../components/Chillin'/Chillin'";
import CustomizedAccordions from "../../components/FAQ/FAQ";
import Featuers from "../../components/Featuers/Featuers";
import RoadMap from "../../components/RoadMap/RoadMap";
import SimpleSlider from "../../components/Slider/SimpleSlider";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="banner"></div>
      <Featuers />
      <Chillin />
      <RoadMap />
      <CustomizedAccordions />
    </div>
  );
};

export default Home;
