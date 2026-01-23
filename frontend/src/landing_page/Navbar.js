<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid p-2  ">
      <nav class="navbar navbar-expand-lg "style={{backgroundColor : "ffffff"}}>
        <div class="container-fluid">
          <Link class="navbar-brand pl-5 ml-5" to="/">
            <img src="media/images/logo.svg"  style={{width : "25%",marginLeft : "20vh"}}></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse pl-4" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" to="signup">
                  Sign up
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="about">
                  About
                </Link>
              </li>
              
                   <li class="nav-item">
                <Link class="nav-link active" to="/products">
                  Product
                </Link>
              </li>
                 
              <li class="nav-item">
                <Link class="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="support">
                  Support
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
=======
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid p-2  ">
      <nav class="navbar navbar-expand-lg "style={{backgroundColor : "ffffff"}}>
        <div class="container-fluid">
          <Link class="navbar-brand pl-5 ml-5" to="/">
            <img src="media/images/logo.svg"  style={{width : "25%",marginLeft : "20vh"}}></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse pl-4" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" to="signup">
                  Sign up
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="about">
                  About
                </Link>
              </li>
              
                   <li class="nav-item">
                <Link class="nav-link active" to="/products">
                  Product
                </Link>
              </li>
                 
              <li class="nav-item">
                <Link class="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="support">
                  Support
                </a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
>>>>>>> 31498f67d5e4e368a383634cc4bf5d861f9c5d55
