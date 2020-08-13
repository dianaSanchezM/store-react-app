import React from "react";
import "./navbar.css";
import Logo from "../../images/aerolab-logo.svg";
import coin from "../../images/coin.svg";

const NavBar = ({ name, points }) => {
  return (
    <div className="navigation-bar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="profile">
        <p>{name}</p>
        <div className="points">
          <p>{points}</p>
            <img src={coin} alt="coin" />
          
        </div>
      </div>
    </div>
  );
};

export default NavBar;
