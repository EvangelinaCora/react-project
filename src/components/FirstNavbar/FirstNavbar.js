import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import AppleIcon from "@mui/icons-material/Apple";
import CartWidget from "../CartWidget/CartWidget";
import css from "../FirstNavbar/FirstNavbar.css";
import { Link, useNavigation } from "react-router-dom";

const FirstNavbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <nav className="FirstNav">
        <ul className="nav-list">
          <li>
            <Link to={"/"}>
              <AppleIcon className="icon-apple" />
            </Link>
          </li>
          <Link style={{ textDecoration: "none" }} to="/cart">
            <li className="cart-container">
              <CartWidget className="icon-cart" />
              <span style={{ color: "white" }}>{cart.length}</span>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default FirstNavbar;
