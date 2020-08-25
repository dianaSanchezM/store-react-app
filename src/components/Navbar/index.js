import React, {useEffect, useContext, useState } from "react";
import "./navbar.css";
import Logo from "../../images/aerolab-logo.svg";
import coin from "../../images/coin.svg";
import { Link } from 'react-router-dom';
import {pathsData, fetchData} from '../../const';
import { AppContext } from '../../contexts/UserContext';
import Modal from '../../utils/Modal';
import Points from '../Points';

const NavBar = () => {
  const {user: {name, points}, setUser} = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  
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
          <Link className="link" to='/store-react-app/profile'>
            Profile
          </Link>
        </li>
        <li >
          <Link className="link" to='/store-react-app/'>
            Products
          </Link>
        </li>
      </ul>
      <button className="profile-data" onClick={()=> setShowModal(!showModal)}>
        <p className='username' >{name}</p>
        <div className="points" >
          <p>{points}</p>
          <img src={coin} alt="coin" />
        </div>
      </button>
      {showModal && (
        <Modal setShowModal={setShowModal} showModal={showModal}>
          <div className="modal-confirmartion">
            <Points />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default NavBar;
