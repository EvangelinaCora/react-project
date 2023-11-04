import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ producto }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/product/${producto.id}`}>
      <div className="card card-productos">
        <img
          className="card-img-top card-img"
          src={producto.img}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{producto.name}</h5>
          <p className="card-text">${producto.price}</p>
          <button className=" boton-productos">Ver detalle</button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
