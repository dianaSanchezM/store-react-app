import React, { useContext } from "react";
import "./profile.css";
import Products from "../Products";
import { AppContext } from "../../contexts/UserContext";

const Profile = ({ info }) => {
  const {
    user: { name, points, createDate='' },
    setUser,
  } = useContext(AppContext);

  return (
    <div className="profile">
      <div className="user-info">
        <h1>{name}</h1>
        <h2>Points available: {points}</h2>
        <p>Count created on: {createDate.substr(0,10)}</p>
      </div>
      <h2>Buy history</h2>
      <Products {...info} />
    </div>
  );
};

export default Profile;
