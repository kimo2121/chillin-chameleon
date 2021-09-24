import React from "react";
import "./roadMap.css";

const RoadMap: React.FC = () => {
  return (
    <div className="roadmap">
      <h1>Roadmap</h1>
      <span>Items we will begin work on when reaching these goals!</span>
      <br />
      <br />
      <div className="maps-container">
        <div className="map">
          <p>@50% Sold</p>
          <p>-File for a legal LLC Business</p>
          <p>-Develop Discord & Telegram BOTs</p>
        </div>
        <div className="map">
          <p>@75% Sold</p>
          <p>-Begin 2nd NFT Artwork</p>
          <p>-Update Website Design</p>
          <p>-Plush Chilleon to buy</p>
        </div>
        <div className="map">
          <p>@100% Sold Out</p>
          <p>-Develop Same-Chain Fusions</p>
          <p>-Develop Cross-Collection Fusions</p>
          <p>-Accessory Fusions</p>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
