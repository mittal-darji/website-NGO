import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

function Header() {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const closeAboutDropdown = () => {
    setIsAboutDropdownOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="topbar py-2 px-3 d-flex justify-content-between align-items-center text-white">
        <div className="d-flex align-items-center gap-4 flex-wrap">
          <div>
            <i className="fas fa-phone-alt me-2"></i>Ph: +91 9707222000
          </div>
          <div>
            <i className="fas fa-envelope me-2"></i>Gmail:
            Srijankutumbakam@gmail.com
          </div>
        </div>
        <div className="d-flex gap-2 align-items-center">
          <select className="form-select form-select-sm lang-select">
            <option>English</option>
            <option>Hindi</option>
          </select>
          <div className="input-group input-group-sm search-box">
            <input
              type="text"
              className="form-control"
              placeholder="Search here..."
            />
            <button className="btn btn-light">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Main Navbar */}
      <nav className="navbar bottom-nav navbar-expand-lg shadow-sm">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="Logo" className="navbar-logo me-2" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  onClick={toggleAboutDropdown}
                  aria-expanded={isAboutDropdownOpen}
                >
                  About Us
                </Link>
                <ul
                  className={`dropdown-menu ${
                    isAboutDropdownOpen ? "show" : ""
                  }`}
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/about/founder"
                      onClick={closeAboutDropdown}
                    >
                      Founder
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/about/mission"
                      onClick={closeAboutDropdown}
                    >
                      Mission
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/about/vision"
                      onClick={closeAboutDropdown}
                    >
                      Vision
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/about/Kanyadaan"
                      onClick={closeAboutDropdown}
                    >
                      Kanyadaan
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/about/Campaign"
                      onClick={closeAboutDropdown}
                    >
                      Campaign
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/about/organization"
                      onClick={closeAboutDropdown}
                    >
                      About Organization
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ourwork">
                  Our Work
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/media">
                  Media
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/achievements">
                  Achievements
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/donate">
                  Donate
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className="nav-link btn btn-primary text-white px-3 py-2 rounded ms-2"
                  to="/login"
                >
                  <i className="fas fa-sign-in-alt me-1"></i>
                  Login
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link btn  rounded ms-2" to="/membership">
                  <i className="fas fa-sign-in-alt me-1"></i>
                  Membership
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
