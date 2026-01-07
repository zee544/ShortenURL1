import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">𝒵𝑒𝑒...</h2>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-menu ${open ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
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
            onClick={() => setOpen(false)}
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
            onClick={() => setOpen(false)}
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
