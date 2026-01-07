import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">𝒵𝑒𝑒...</h2>

      <ul className="navbar-menu active">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Customize
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/auto"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            Auto Generate
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
