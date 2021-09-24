import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { ReactComponent as Menu } from "../../assets/icons/menu.svg";
import { ReactComponent as Cancel } from "../../assets/icons/cancel.svg";
import Full_Logo from "../../assets/images/Full_Logo.png";

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <img src={Full_Logo} alt="" />
        </a>
      </div>
      <Menu onClick={() => setMenu(true)} className="slide-menu-icon" />
      <div className={menu ? "slide-menu active" : "slide-menu"}>
        <Cancel onClick={() => setMenu(false)} className="slide-x-icon" />
        <div className="slide-menu-links">
          <Link
            activeClass="active"
            onClick={() => setMenu(false)}
            smooth={true}
            duration={800}
            to="Home"
          >
            Story
          </Link>
          <Link
            activeClass="active"
            onClick={() => setMenu(false)}
            smooth={true}
            duration={800}
            to="About"
          >
            Roadmap
          </Link>
          <Link
            activeClass="active"
            onClick={() => setMenu(false)}
            smooth={true}
            duration={800}
            to="Mint"
          >
            Team
          </Link>
          <Link
            activeClass="active"
            onClick={() => setMenu(false)}
            smooth={true}
            duration={800}
            to="RoadMap"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
