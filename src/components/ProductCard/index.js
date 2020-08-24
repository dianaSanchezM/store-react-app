import React, {useContext} from "react";
import "./productCard.css";
import BuyBlueIcon from "../../images/buy-blue.svg";
import coin from "../../images/coin.svg";
import { AppContext } from '../../contexts/UserContext';

const ProductCard = ({ _id, name, cost, category, img: { url } }) => {
  const { user, setUser } = useContext(AppContext);

  const difference = user.points- cost;
  return (
    <div className="card">
      <div className="card-img">
        {(difference > 0)?  <img className='icon' src={BuyBlueIcon} alt="icon"></img> :
        <div className="icon">
        <div className="you-need">
          <p> You need {-difference}</p>
          <img src={coin} alt="coin" />
        </div>
      </div>}
        {/* <img className='icon' src={BuyBlueIcon} alt="icon"></img> */}
        
        <img className="product" src={url} alt="product"></img>
      </div>

      <div className="info">
        <div className="line"></div>
        <p>{category}</p>
        <h3>{name}</h3>
        <div className="points-card">
          <p>{cost}</p>
          <img src={coin} alt="coin" />
        </div>

        {/* <button className="button">{cost}</button> */}
      </div>
    </div>
  );
};

export default ProductCard;
