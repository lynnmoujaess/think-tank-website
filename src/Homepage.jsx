import React, { useEffect, useState } from "react";
import "./NavbarStyles.css";
import Slideshow from "./Slideshow";
import "./HomepageStyles.css";
import ValueCard from "./ValueCard";

const Homepage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [carVisible, setCarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const carPosition = carVisible ? `${scrollPosition * 0.8}px` : "-200%";

  useEffect(() => {
    const animationDelay = setTimeout(() => {
      setCarVisible(true);
    }, 1000);

    return () => clearTimeout(animationDelay);
  }, []);

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
        <div className="moving-car-div">
          <img
            className="moving-car-img"
            src={process.env.PUBLIC_URL + "Photos/car-side.png"}
            style={{
              width: "29%",
              position: "relative",
              left: carPosition,
              transition: "left 0.3s ease",
            }}
            alt=""
          />
        </div>
        <div id="our-values" className="section-div">
          <h2 className="section-h2">Our Values</h2>
          <div className="cards-container">
            <ValueCard
              value="Openness"
              img={process.env.PUBLIC_URL + "Photos/values/openness-value.jpeg"}
              description="We are excited by change and open to new opportunities. We learn from our mistakes in order to create our future. We take our colleagues' ideas seriously, because every little impulse can turn into something great."
            />
            <ValueCard
              value="Transparency"
              img={process.env.PUBLIC_URL + "Photos/values/transparency-value.jpeg"}
              description="We do not embellish, but point out contradictions constructively. We act with integrity and talk to each other. This is the only way to create trust and bring our visions onto the streets."
            />
            <ValueCard
              value="Responsibility"
              img={process.env.PUBLIC_URL + "Photos/values/responsibility-value.jpeg"}
              description="We take consistent decisions and commit to them personally. This allows us to work freely and more effectively. By taking responsibility for our own projects, we can develop ourselves further personally."
            />
            <ValueCard
              value="Trust"
              img={process.env.PUBLIC_URL + "Photos/values/trust-value.jpeg"}
              description="We trust and rely on each other. We are a team that sticks together and only grows together. This is essential if we are to act swiftly and achieve our goals which take us further."
            />
            <ValueCard
              value="Appreciation"
              img={process.env.PUBLIC_URL + "Photos/values/appreciation-value.jpeg"}
              description="We reflect on our actions, respect each other. Clarity, feedback and celebrating each other's success are crucial for a positive working atmosphere. Every individual makes a difference."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
