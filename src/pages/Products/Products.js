import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Componentes
import ProductCard from "../../components/ProductCard/ProductCard";

const Products = () => {
  const [productos, setProductos] = useState([]);
  const newProducts = productos.filter((producto) => {
    return producto.category === "new";
  });

  const oldProducts = productos.filter((producto) => {
    return producto.category === "old";
  });

  useEffect(() => {
    axios("https://sc-api-iphones.onrender.com/").then((resp) => {
      setProductos(resp.data);
    });
  }, []);

  const ulStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "10px",
    gridAutoRows: "minmax(100px, auto)",
    marginTop: "2rem",
  };

  const linkStyle = {
    listStyle:"none",
     color: "black",
    textDecoration:"none",
    fontSize: "1.5rem",
    display: "flex",
    justifyContent: "space-around",
  };
  return (
    <>
      <ul style={linkStyle}>
        <li>
        <Link style={linkStyle} to={"/category/new"}>Modelos actuales</Link>
        </li>

        <li>
        <Link style={linkStyle} to={"/category/old"}>Modelos antiguos</Link>
        </li>
        
        
      </ul>
      <ul style={ulStyle}>
        {productos.map((producto) => {
          return <ProductCard key={producto.id} producto={producto} />;
        })}
      </ul>
    </>
  );
};

export default Products;
