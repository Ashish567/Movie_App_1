import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.svg";
import Button from "@material-ui/core/Button";

export default function Header() {
  return (
    <div className="header">
      <img src={Logo} alt="React Logo" className="logo" />
      <Button variant="contained" className="button">
        Login
      </Button>
    </div>
  );
}
