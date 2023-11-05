import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Category/CategoryPage.css";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import ProductCard from "../../components/ProductCard/ProductCard";

export const CategoryPage = () => {
  const [productsData, setProductsData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, "products"),
        where("category", "==", categoryId)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setProductsData(docs);
    };
    getProducts();
  }, [categoryId]);

  return (
    <>
      <div className="categoryPage">
        <ul className="products-list">
          {productsData.map((producto) => {
            return <ProductCard key={producto.id} producto={producto} />;
          })}
        </ul>
      </div>
    </>
  );
};
