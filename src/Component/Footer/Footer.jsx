import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* Logo & About */}
          <div className="col-md-4">
            <h4 className="footer-logo">Srijan Kutumbakam Seva Sansthan</h4>
            <p>
              "A society truly progresses when we start living not just for
              ourselves, but for others as well."
            </p>
            <div className="social-icons">
              <Link
                to="https://x.com/SRIJANKUTUMB12?t=kz5Ki6SE4W2BKC03szo77w&s=08"
                target="_blank"
              >
                <i className="bi bi-twitter-x"></i>
              </Link>
              <Link
                to="https://www.facebook.com/share/r/1AfTszjNgr/"
                target="_blank"
              >
                <i className="bi bi-facebook"></i>
              </Link>
              <Link
                to="https://www.instagram.com/reel/DMXHh5qzJCj/?igsh=MTA2OHdwOXpxcHlhdA=="
                target="_blank"
              >
                <i className="bi bi-instagram"></i>
              </Link>
              <Link
                to="https://x.com/SRIJANKUTUMB12?t=kz5Ki6SE4W2BKC03szo77w&s=08"
                target="_blank"
              >
                <i className="bi bi-linkedin"></i>
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-md-4">
            <div className="home-footer-links">
              <h5 className="footer-title">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="#">About us</Link>
                </li>
                <li>
                  <Link to="#">Services</Link>
                </li>
                <li>
                  <Link to="#">Terms of service</Link>
                </li>
                <li>
                  <Link to="#">Privacy policy</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h5 className="footer-title">Contact Us</h5>
            <p>
              Srijan Kutumbakam Seva sansthan,
              <br />
              Rajendra colony, Bhiwani chungi ,
              <br />
              Rohtak , Haryana PIN 124001
            </p>
            <p>
              <strong>Phone:</strong> +91 9707222000
              <br />
              <strong>Email:</strong> Srijankutumbakam@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
