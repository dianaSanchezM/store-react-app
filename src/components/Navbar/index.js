import React from "react";
import './navbar.css';
import Logo from '../../images/aerolab-logo.svg';

const NavBar = ({name, points}) => {
  return (
    <div className="navigation-bar">
      <div id="navigation-container">
        <img src={Logo} alt="Logo" />
        <div className="searchBar">
            <p >{name}</p>
            <div className='money'>
                {points}
            </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
