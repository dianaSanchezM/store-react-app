import React, {useEffect, useContext } from "react";
import "./navbar.css";
import Logo from "../../images/aerolab-logo.svg";
import coin from "../../images/coin.svg";
import { Link } from 'react-router-dom';
import {pathsData, fetchData} from '../../const';
import { AppContext } from '../../contexts/UserContext';


const NavBar = () => {
  const {user: {name, points}, setUser} = useContext(AppContext);
  
  useEffect(() => {
    fetchData({ data: pathsData.load_user}).then( res => setUser(res));
  }, [setUser]);

  return (
    <div className="navigation-bar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="links">
        <li >
          <Link className="link" to='/profile'>
            Profile
          </Link>
        </li>
        <li >
          <Link className="link" to='/'>
            Products
          </Link>
        </li>
      </ul>
      <div className="profile-data">
        <p className='username' >{name}</p>
        <div className="points">
          <p>{points}</p>
          <img src={coin} alt="coin" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
