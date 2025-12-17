import { Link } from "react-router-dom";
import './Navbar.css'; // Make sure to import your CSS

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">𝒵𝑒𝑒...</h2> {/* Changed to Zee */}
      
      <ul className="navbar-menu">
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/consumer" className="navbar-link">Customize</Link> {/* Updated to Consumer */}
        </li>
        <li>
          <Link to="/auto-generate" className="navbar-link">Auto Generate</Link> {/* Updated to Auto Generate */}
        </li>
        <li>
          <Link to="/about" className="navbar-link">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;