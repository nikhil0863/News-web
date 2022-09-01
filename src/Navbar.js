import React, { Component } from "react";
import {
    a
  } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" to="#">
              NewFeeds
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-a active" aria-current="page" to="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-a active"
                    aria-current="page"
                    to="/business"
                  >
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-a active" aria-current="page" to="/entertainment">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-a active" aria-current="page" to="/health">
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-a active" aria-current="page" to="/science">
                    Science
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-a active" aria-current="page" to="/sports">
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-a active" aria-current="page" to="/technology">
                    Technology
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
