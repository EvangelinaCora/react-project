import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";

export const ProductPage = () => {
  let { productId } = useParams();

  const [producto, setProducto] = useState();

  useEffect(() => {
    axios(`https://sc-api-iphones.onrender.com/product/${productId}`).then(
      (resp) => {
        setProducto(resp.data);
      }
    );
  }, [productId]);

  console.log(producto);

  return <div style={{
    display: "flex",
    justifyContent: "center",
    marginTop: "5rem",
    height: "80vh",
  }}>{producto ? <ProductCard producto={producto[0]} /> : null} </div>
};
