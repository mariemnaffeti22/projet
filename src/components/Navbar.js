import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImage from "./assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">
          <img src={logoImage} alt="Logo" className="logo" />
        </Link>

        <ul className="nav-links">
          <Link to="/">
            <li>Accueil</li>
          </Link>
          <Link to="/employées">
            <li>Employées</li>
          </Link>
          <Link to="/taches">
            <li>Taches</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
