import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Menu from "../menu/menu";

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
                <Link className="nav-link navbar-list" to={"/"}>
                  APPLE STORE
                </Link>
              </li>
              <li className="nav-item ">
                <Link to={"/products"}>
                  {" "}
                  <Menu className="navbar-menu" />
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link navbar-list" to={"/contact"}>
                  CONTACTO
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
