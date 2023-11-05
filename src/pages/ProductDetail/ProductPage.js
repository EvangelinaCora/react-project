import React, { useContext, useEffect, useState } from "react";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const { addToCart } = useContext(CartContext);

  const { productId } = useParams();

  const addProductToCart = () => {
    addToCart(product[0]);
    Toastify({
      text: `Tu producto se agrego al carrito`,
      duration: 3000,
      backgroundColor: "#A8DF8E",
    }).showToast();
  };

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, "products"),
        where(documentId(), "==", productId)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProduct(docs);
    };
    getProducts();
  }, []);

  return (
    <div>
      {product.map((data) => (
        <div key={data.id} className="productPage">
          <img
            className="card-img-top card-img img-producto"
            src={data.img}
            alt="Card image cap"
          />
          <div className="data">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">${data.price}</p>
            <p className="card-description">{data.description}</p>
            <button className=" boton-productos" onClick={addProductToCart}>
              Agregar al carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
