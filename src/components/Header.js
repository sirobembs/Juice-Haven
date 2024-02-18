import React from "react";

import Nav from "../components/Nav";
import "./Header.css";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Reservation from "../Pages/Reservation";
import Onlineorder from "../Pages/Onlineorder";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";

function Header() {
  return (
    <header className="Header">
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/onlineorder" element={<Onlineorder />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </header>
  );
}

export default Header;
