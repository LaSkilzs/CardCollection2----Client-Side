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
          <Link to="/">
            <li className="nav-link">Home</li>
          </Link>
          <Link to="/cars">
            <li className="nav-link">Cars</li>
          </Link>
          <Link to="/favs">
            <li className="nav-link">Favorites</li>
          </Link>
          <Link to="/login">
            <li className="nav-link">Login/SignUp</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
