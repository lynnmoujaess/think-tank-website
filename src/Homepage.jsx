import React from "react";
import "./NavbarStyles.css";
import Slideshow from "./Slideshow";
import "./HomepageStyles.css";

const Homepage = () => {
  return (
    <>
      <nav>
        <div className="logo-div">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "Photos/logos/bmw-logo-navbar.png"}
            alt=""
          />
          <div>
            <h2 className="department-name">Supply Chain Innovations</h2>
            <h2 className="department-name">Think Tank</h2>
          </div>
        </div>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Our Values</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
        </ul>
      </nav>
      <div
        style={{ marginTop: "80px", display: "flex", flexDirection: "column" }}
      >
        <div id="home">
          <Slideshow />
        </div>
      </div>
    </>
  );
};

export default Homepage;
