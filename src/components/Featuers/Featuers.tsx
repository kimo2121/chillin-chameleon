import React from "react";
import "./featuers.css";
import artCollections from "../../assets/images/artCollections.png";
import chain from "../../assets/images/chain.png";
import puzzle from "../../assets/images/puzzle.png";
import children from "../../assets/images/children.png";

const Featuers: React.FC = () => {
  return (
    <div className="features">
      <div></div>
      <div className="features-inner">
        <h1>Pushing NFT’s to the next level!(Roadmap Features)</h1>
        <div className="art-collection">
          <img src={artCollections} alt="" />
          <div>
            <p>NFT Art Collections</p>
            <p>
              Enjoy collecting art? Then you can simply buy and hold some very
              unique pieces.
            </p>
          </div>
        </div>
        <div className="art-collection">
          <img src={chain} alt="" />
          <div>
            <p>Same-Collection Fusions</p>
            <p>
              Fuse 2 NFT’s from the same collection to create your own custom
              NFT.
            </p>
          </div>
        </div>
        <div className="art-collection">
          <img src={puzzle} alt="" />
          <div>
            <p>Cross-Collection Fusions</p>
            <p>
              Fuse 2 NFT’s each from different collections, compatible traits
              can be chosen to create a new one of a kind NFT!
            </p>
          </div>
        </div>
        <div className="art-collection">
          <img src={children} alt="" />
          <div>
            <p>Accessory Fusions</p>
            <p>
              Take customization to the next level. Accessory and Booster packs
              will allow you to customize individual traits for the ultimate
              interactive feature!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featuers;
