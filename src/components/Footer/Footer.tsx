import React from "react";
import "./footer.css";
import logo from "../../assets/images/logo.svg";
import discord from "../../assets/images/discord.png";

const Footer: React.FC = () => {
  return (
    <div className="">
      <div className="footer">
        <div className="">
          <img src={logo} alt="" className="logo" />
          <p>
            Founding Company for <br /> DigiFusions interactive <br /> NFT
            Collections.
          </p>
          <p>
            Experience the next <br /> phase in NFT evolution!!!
          </p>
        </div>
        <div className="">
          <p className="footer_topTitle">Resources</p>
          <p>Roadmap</p>
          <p>FAQ</p>
          <p>Collection 1Email Us</p>
        </div>

        <div className="">
          <p className="footer_topTitle">Community</p>
          <p>Discord</p>
          <p>Twitter</p>
          <p>Telegram</p>
        </div>

        <img src={discord} alt="" className="discord" />
      </div>

      <hr className="footer_hr" />
      <p style={{ textAlign: "center" }}>Copyright 2021 Precious Pixels Art</p>
    </div>
  );
};

export default Footer;
