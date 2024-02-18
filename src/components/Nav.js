import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../images/Logo.svg";

function Nav() {
  return (
    <nav className="Nav">
      <img src={logo} className="logo" alt="App Logo" />
      <ul className="Nav-items">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/reservation">reservation</Link>
        </li>
        <li>
          <Link to="/onlineorder">Online Order</Link>
        </li>
      </ul>
      <button className="login-button">
        <a href="#log_in">Log In</a>
      </button>
    </nav>
  );
}

export default Nav;
