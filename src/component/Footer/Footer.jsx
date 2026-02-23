import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">

       
        <div className="footer-section brand">
          <h2>Lunessa</h2>
          <p>
            Elevating your style with elegance, confidence, and timeless fashion.
            Discover clothing, beauty, and wedding collections crafted just for you.
          </p>
        </div>

       
        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <Link to="/women"><li>Women Fashion</li></Link>
            <Link to="/men"><li>Men Fashion</li></Link>
            <Link to="/beauty"><li>Beauty & Creams</li></Link>
            <Link to="/groom-bride"><li>Groom & Bride</li></Link>
          </ul>
        </div>

       
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <Link to="/about"><li>About Us</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
            <Link to="/privacy"><li>Privacy Policy</li></Link>
            <Link to="/terms"><li>Terms & Conditions</li></Link>
          </ul>
        </div>

       
        <div className="footer-section">
          <h3>Stay Connected</h3>
          <p>Subscribe for updates and exclusive offers.</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Lunessa. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;