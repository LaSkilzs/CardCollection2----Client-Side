import React from "react";
import logo2 from "../../logo2.png";
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        {/* <img src={logo2} alt="car collection logo" /> */}
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              Cars
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Favorites
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Login
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
