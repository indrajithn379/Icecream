import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="index.html"
          style={{ color: "brown" }}
        >
          <b>Welcome to Frozen Treats</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item">
              <a className="nav-link" href="#abt">
                <b>About us |</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ft">
                <b>Contact |</b>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <b>Others</b>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#srv">
                    <b>Services</b>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <b> FAQs</b>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <b> About Us </b>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="far fa-envelope"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <b>Search</b>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
