import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">𝒵𝑒𝑒...</h2>

      <ul className="navbar-menu active">
        <li>
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/customm" className="navbar-link">
            Customize
          </NavLink>
        </li>
        <li>
          <NavLink to="/auto-generate" className="navbar-link">
            Auto Generate
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navbar-link">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
