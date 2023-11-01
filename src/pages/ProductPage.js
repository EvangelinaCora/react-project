import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Products/ProductPage.css";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import ProductCard from "../components/ProductCard/ProductCard";

export const ProductPage = () => {
  const [product, setProduct] = useState([]);

  const { productId } = useParams();
  console.log(productId);

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
        <div className="productPage">
            <img
              className="card-img-top card-img img-producto"
              src={data.img}
              alt="Card image cap"
            />
          <div className="data">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">${data.price}</p>
            <p className="card-text">{data.description}</p>
            <button className=" boton-productos">Agregar al carrito</button>
          </div>
        </div>
      ))}
    </div>
  );
};
