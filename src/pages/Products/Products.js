import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import "./Products.css";

const Products = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
      const q = query(collection(db, "products"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductos(docs);
      setIsLoading(false);
    };
    getProducts();
  }, []);

  return (
    <>
      {isLoading && (
        <div
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4>Cargando..</h4>
        </div>
      )}
      <ul className="products-list">
        {productos.map((producto) => {
          return <ProductCard key={producto.id} producto={producto} />;
        })}
      </ul>
    </>
  );
};

export default Products;
