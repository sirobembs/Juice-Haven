import React from "react";
import logo from "../images/Logo.svg";
import Nav from "../components/Nav";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <img src={logo} className="logo" alt="App Logo" />
      <Nav />
      <button className="login-button">
        <a href="#log_in">Log In</a>
      </button>
    </header>
  );
}

export default Header;
