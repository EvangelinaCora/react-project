import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <nav className="Footer">
        <ul className="Footer-list">
          <li>
            <AppleIcon className="icon-apple" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Footer;
