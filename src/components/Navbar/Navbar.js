import React from "react";
import "./Navbar.css";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CartWidget from "../CartWidget/CartWidget"


const Navbar = () => {
  return (
    <>
     
      <nav className="navbar navbar-expand-lg navbar-bs">
        <div className="container-fluid  ">
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler button-responsive"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon button-responsive"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item ">
              <a className="nav-link" href="#">
                <MenuBookIcon className="icon-book" />
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link navbar-list" href="#">
                  Book Store
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link navbar-list" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link navbar-list" aria-disabled="true">
                  About us
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" aria-disabled="true">
                  <CartWidget/>
                  <span className="hardcoded-number">1</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
