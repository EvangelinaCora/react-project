import React, { useContext, useState } from "react";
import "./styles.css";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import Toastify from "toastify-js";
import { CircularProgress } from "@mui/material";
import "toastify-js/src/toastify.css";

export const PurchasePage = () => {
  const { cart, totalPurchase, emptyCart } = useContext(CartContext);
  let products = [];
  cart.map((prod) => {
    products.push(prod.name);
  });
  const initalState = {
    name: "",
    surname: "",
    email: "",
    totalPurchase: totalPurchase(),
    products: products,
  };
  const [inputValues, setInputValues] = useState(initalState);
  const [isLoading, setIsLoading] = useState(false);
  const { name, surname, email } = inputValues;
  const handleChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const docRef = await addDoc(collection(db, "purchaces"), {
      inputValues,
    });
    Toastify({
      text: `Compra finalizada con ID: ${docRef.id}`,
      duration: 3000,
      backgroundColor: "#A8DF8E",
    }).showToast();
    setIsLoading(false);
    emptyCart();
  };

  return (
    <div
      style={{
        height: "72vh",
        marginTop: "5rem",
      }}
    >
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          required
          type="text"
          value={name}
          placeholder="Nombre"
          name="name"
        />
        <input
          onChange={handleChange}
          required
          type="text"
          value={surname}
          placeholder="Apellido"
          name="surname"
        />
        <input
          onChange={handleChange}
          required
          type="email"
          value={email}
          placeholder="Email"
          name="email"
        />
        <button className={cart.length > 0 ? "confirm-btn" : "disabled"}>
          {isLoading ? "Cargando..." : "Confirmar compra"}
        </button>
      </form>
      <div
        style={{
          marginLeft: "3rem",
        }}
      >
        <h4 style={{ color: "#000" }}>Precio total: ${totalPurchase()}</h4>
        {cart.map((prod) => (
          <div key={prod.id}>
            <p
              style={{
                color: "#000",
              }}
            >
              (<span>{prod.amount}</span>) {prod.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
