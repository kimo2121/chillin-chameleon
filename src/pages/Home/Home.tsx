import React from "react";
import CustomizedAccordions from "../../components/FAQ/FAQ";
import Featuers from "../../components/Featuers/Featuers";
import RoadMap from "../../components/RoadMap/RoadMap";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="banner"></div>
      <Featuers />
      <RoadMap />
      <CustomizedAccordions />
    </div>
  );
};

export default Home;
