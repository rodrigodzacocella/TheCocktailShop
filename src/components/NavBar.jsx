import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link className="navBar__logo" to="/">
        TheCocktailShop
      </Link>
      <ul className="navBar__links">
        <li className="navBar__list-item">
          <Link className="navBar__link" to="/">
            Home
          </Link>
        </li>
        <li className="navBar__list-item">
          <Link className="navBar__link" to="/About">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
