import React from "react";
//import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NewsMonkey
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="/entertainment">
                  Entertainment{""}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/general">
                  General{""}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/health">
                  Health{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/science">
                  Science{""}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sports">
                  {" "}
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/technology">
                  Technology{" "}
                </a>
              </li>

              <li className="nav-item " >
                <a className="nav-link" href="https://www.linkedin.com/in/upendarthota/">
                  Developd by Upendar Thota
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
