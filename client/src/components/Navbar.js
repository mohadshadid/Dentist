import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Navbar = () => {
  const navbarStyle = {
    background: "#d8e4f1",
  };

  // const imgStyle = {
  //   mWidth: "60px",
  //   height: "60px",
  //   margin: "auto",
  // };
  const linkStyle = {
    color: "#07a3da",
  };

  const navcontroller = () => {
    document.getElementById("navbarNav").classList.toggle("show");
  }
  return (

    

    <nav className="navbar navbar-expand-lg " style={navbarStyle}>
      <div className="container">
        {/* <img src="https://ik.imagekit.io/shadid/Screenshot%202023-09-08%20at%2001.01.53.png?updatedAt=1694124141771" alt="" 
      style={imgStyle}/> */}
        <Link className="navbar-brand" style={linkStyle} to="/">
          Dental Home Clinic
        </Link>{" "}
        {/* Use Link instead of <a> */}
        <button
          className="navbar-toggler"
          type="button"
          // data-bs-toggle="collapse"
          // data-bs-target="#navbarNav"
          // aria-controls="navbarNav"
          // aria-expanded="false"
          // aria-label="Toggle navigation"
          onClick={navcontroller}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <Link className="nav-link nav-link-hover" to="/">
                Home
              </Link>{" "}
              {/* Use Link instead of <a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-hover" to="/about">
                About
              </Link>{" "}
              {/* Use Link instead of <a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-hover" to="/services">
                Services
              </Link>{" "}
              {/* Use Link instead of <a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-link-hover" to="/contact">
                Contact
              </Link>{" "}
              {/* Use Link instead of <a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
