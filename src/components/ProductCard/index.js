import React, { useContext, useState } from "react";
import "./productCard.css";
import BuyBlueIcon from "../../images/buy-blue.svg";
import BuyWHiteIcon from "../../images/buy-white.svg";
import coin from "../../images/coin.svg";
import { AppContext } from "../../contexts/UserContext";
import { fetchData, pathsData } from "../../const";
import Modal from "../../utils/Modal";

const ProductCard = ({ _id, name, cost, category, img: { url } }) => {
  const { user, setUser } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [resultMessage, setResultMessage] = useState("");

  const handleRedeem = () => {
    fetchData({
      data: pathsData.redeem,
      body: { productId: _id },
    })
      .then((res) => {
        setShowModal(true);
        res.message === "You've redeem the product successfully"
          ? setResultMessage(res.message)
          : setResultMessage("Oh no, something went wrong!");

        fetchData({ data: pathsData.load_user }).then((result) =>
          setUser(result)
        );
      })
      .catch(setResultMessage("Oh no, something went wrong!"));
  };

  const difference = user.points - cost;
  return (
    <div className="card">
      {difference > 0 ? (
        <img className="icon" src={BuyBlueIcon} alt="icon"></img>
      ) : (
        <div className="icon">
          <div className="you-need">
            <p> You need {-difference}</p>
            <img src={coin} alt="coin" />
          </div>
        </div>
      )}
      <img className="product" src={url} alt="product"></img>

      <div className="info">
        <div className="line"></div>
        <p>{category}</p>
        <h3>{name}</h3>
        <div>
          <p>{cost}</p>
        </div>
      </div>

      {difference > 0 && (
        <div className="card-hover">
          <img className="icon" src={BuyWHiteIcon} alt="icon"></img>
          <div className="buy-info">
            <div className="points-card">
              <p>{cost}</p>
              <img src={coin} alt="coin" />
            </div>
            <button className="btn btn-add" onClick={() => handleRedeem()}>
              Redeem now
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <Modal setShowModal={setShowModal} showModal={showModal}>
          <div className="modal-confirmartion">
            <p>{resultMessage}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProductCard;
