import React from "react";
import SimpleSlider from "../Slider/SimpleSlider";
import "./styles.css";

const Chillin: React.FC = () => {
  return (
    <div className="chilling-component">
      {/* <p>
        Chilleon, that’s short for “Chillin’ Chameleon” he vanquishes work by
        chillin! For Chilleon it’s the weekend every day. Chillin’ is the way to
        go cuz there is nowhere to go. Sometimes he’s happy, sometimes mad, and
        sometimes he’s just dead... tired cuz chillin got the best of him.
      </p> */}
      <div className="chilling-top-part">
        <SimpleSlider />
        <div className="top-part-right">
          <button>Connect ETH walletand MINT NFT</button>
          <p>
            Mint Fee 0.05ETHERC-721 Token 10,000 NFT Limit9950 Available to MINT
            120+ Unique Traits OpenSea Availability Soon
          </p>
          <div className="rarity-rank">
            <p>
              Find out the rarity! enter rarity rank to find collection# enter
              collection# to find rarity rank
            </p>
            <p>search by rarity rank</p>
            <div className="rarity-inner">
              <input type="text" />
              or
              <input type="text" />
              <p>search by collection #</p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Chillin;
