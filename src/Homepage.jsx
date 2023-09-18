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
        <div id="about-us">
          <div className="quote-div">
            <h1 className="quote-h1">
              "Our Think Tank team is stellar because of its people."
            </h1>
            <p className="quote-p">
              - Sergio Correa, Head of Supply Chain Innovations Think Tank
            </p>
          </div>
          <div className="separator-line"></div>
          <div className="about-us-container">
            <div className="about-us-div">
              <div className="about-us-h3-div">
                <h3 className="about-us-h3">Who we are</h3>
              </div>
              <div>
                <p className="about-us-p">
                  Think Tank by Performance Control & Digitalization at BMW
                  Group. Our team tackles the most challenging problems where
                  the only limits are our creativity. Key to our success is
                  digitalization to ensure accurate reflections of supply chain
                  operations. We thrive on creative thinking and are committed
                  to pioneering advancements that shape the future of our
                  industry.
                </p>
              </div>
            </div>
            <div className="about-us-div">
              <div className="about-us-h3-div">
                <h3 className="about-us-h3">What we do</h3>
              </div>
              <div>
                <p className="about-us-p">
                  Big data is nothing without the creative minds that transform
                  facts into innovations. We decode big data, derive insights,
                  and uncover hidden truths within vast datasets, helping us
                  re-envision both Industry 4.0 and mobility.. Our global
                  network of operational supply chain and data science experts
                  actively deploys digital solutions, impacting the entire BMW
                  Group.
                </p>
              </div>
            </div>
            <div className="about-us-div">
              <div className="about-us-h3-div">
                <h3 className="about-us-h3">Why we do it</h3>
              </div>
              <div>
                <p className="about-us-p">
                  We envision a world where data, guided by the brilliance of
                  creative minds, serves as the driving force behind pioneering
                  innovations. We aspire to chart the course towards a future of
                  seamless, intelligent, and sustainable transportation. We
                  harness the power of today's data to sculpt the transportation
                  of tomorrow!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
