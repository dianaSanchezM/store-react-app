import React from "react";
import "./productCard.css";

const ProductCard = ({ _id, name, cost, category, img: { url } }) => {
  return (
    <div className="card">
      <img
        src={url}
        alt="product"
      ></img>
      <div className="info">
        <div></div>
        <p>{category}</p>
        <h3>{name}</h3>

        <button  className="button">
          {cost}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
