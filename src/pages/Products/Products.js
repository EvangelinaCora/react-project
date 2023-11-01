import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Componentes
import ProductCard from "../../components/ProductCard/ProductCard";

import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const Products = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "products"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
      setProductos(docs);
    };
    getProducts();
  }, []);

  const ulStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "10px",
    gridAutoRows: "minmax(100px, auto)",
    marginTop: "2rem",
  };

  return (
    <>
      <ul style={ulStyle}>
        {productos.map((producto) => {
          return <ProductCard key={producto.id} producto={producto} />;
        })}
      </ul>
    </>
  );
};

export default Products;
