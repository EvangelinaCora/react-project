import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import CartWidget from "../CartWidget/CartWidget";
import css from "../FirstNavbar/FirstNavbar.css";
import { Link } from "react-router-dom";

const FirstNavbar = () => {
  return (
    <>
      <nav className="FirstNav">
        <ul className="nav-list">
          <li>
            <Link to={"/"}>
              <AppleIcon className="icon-apple" />
            </Link>
          </li>
          <li className="cart-container">
            <CartWidget className="icon-cart" />
            <span className="hardcoded-number">1</span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default FirstNavbar;
