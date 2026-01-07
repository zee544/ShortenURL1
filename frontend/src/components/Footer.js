import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3 className="footer-logo">Auto Link Shortener</h3>
          <p className="footer-text">
            Shorten long URLs instantly with auto-generated and custom links.
            Fast, secure, and easy to use.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/auto">Auto Generate</a></li>
            <li><a href="/customm">Customize Link</a></li>
            <li><a href="/about">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-info">
          <h4>Information</h4>
          <ul>
            <li>Free & Secure</li>
            <li>No Login Required</li>
            <li>Instant Short Links</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026  Link Shortener. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
