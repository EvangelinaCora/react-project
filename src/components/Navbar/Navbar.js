import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
                <a className="nav-link navbar-list" href="#">
                  <Link to={"/"} className="navbar-list">
                    Apple store
                  </Link>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link navbar-list" href="#">
                  <Link to={"/Products"} className="navbar-list">
                    {" "}
                    Productos
                  </Link>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link navbar-list" href="#">
                  <Link to={"/Contact"} className="navbar-list">
                    Contacto
                  </Link>
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
