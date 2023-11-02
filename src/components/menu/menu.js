import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuStyle = {
    color: "black",
    fontSize: "1.1rem",
    fontfamily: "Verdana",
  };

  const linkStyle = {
    listStyle: "none",
    color: "black",
    textDecoration: "none",
    fontSize: "1.5rem",
    display: "flex",
    justifyContent: "space-around",
  };
  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{
          ...menuStyle,
          fontSize: "1.4rem",
          padding: "0",
          margin: "0.3rem 0.2rem 0",
        }}
      >
        Productos
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <Link style={linkStyle} to={"/category/new"}>
            Modelos actuales
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link style={linkStyle} to={"/category/old"}>
            Modelos antiguos
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
