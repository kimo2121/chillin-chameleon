import React from "react";
import Chillin from "../../components/Chillin'/Chillin'";
import CustomizedAccordions from "../../components/FAQ/FAQ";
import Featuers from "../../components/Featuers/Featuers";
import Footer from "../../components/Footer/Footer";
import RoadMap from "../../components/RoadMap/RoadMap";
import Twitter from "../../components/Twitter/Twitter";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="banner"></div>
      <Featuers />
      <Chillin />
      <RoadMap />
      <CustomizedAccordions />
      <Twitter />
      <Footer />
    </div>
  );
};

export default Home;
