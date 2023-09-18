import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  fontFamily: "'Raleway', sans-serif",
  textShadow: "2px 2px 4px rgba(0, 10, 60, 1)",
  fontSize: "50px",
  color: "white",
  position: "relative",
  left: "70px",
  top: "385px",
  zIndex: 10000,
  width: "740px",
  height: "200px",
  lineHeight: "30px",
};

const divStyle = {
  display: "flex",
  backgroundSize: "cover",
  height: "640px",
};

const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent)",
  };

const slideImages = [
  {
    url: process.env.PUBLIC_URL + "/Photos/slideshow/car-road.jpeg",
    caption: (
      <>
        <span style={{ color: "white", marginBottom: "30px", fontWeight: 300 }}>
          BMW's Innovations Department
        </span>
        <br />
        <br />
        <span
          style={{
            fontSize: "16px",
            color: "white",
            lineHeight: "10px",
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 300,
          }}
        >
          We are BMW's Supply Chain Innovations Think Tank. The BMW Group
          aspires to be the most successful and sustainable premium manufacturer
          of automobiles and motorcycles while simultaneously providing premium
          financial and mobility services. As part of this ambition, our team
          strives to keep our customers happy and make sure every BMW makes it
          to its new home on time.
        </span>
      </>
    ),
  },
  {
    url: process.env.PUBLIC_URL + "/Photos/slideshow/plant-car-2.jpeg",
    caption: (
      <>
        <span style={{ color: "white", marginBottom: "30px", fontWeight: 300 }}>
          Innovating Manufacturing
        </span>
        <br />
        <br />
        <span
          style={{
            fontSize: "16px",
            color: "white",
            lineHeight: "10px",
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 300,
          }}
        >
          Our Innovations Department plays a crucial role in revolutionizing the
          manufacturing process. Through cutting-edge technologies and
          innovative solutions, we streamline the supply chain, reduce
          production times, and ensure the highest quality standards for every
          BMW vehicle. Our commitment to innovation drives us to lead in premium
          automobile manufacturing.
        </span>
      </>
    ),
  },
  {
    url: process.env.PUBLIC_URL + "/Photos/slideshow/logistics.jpeg",
    caption: (
        <>
          <span style={{ color: "white", marginBottom: "30px", fontWeight: 300 }}>
              Intelligizing Supply Chains
          </span>
          <br />
          <br />
          <span
            style={{
              fontSize: "16px",
              color: "white",
              lineHeight: "10px",
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 300,
            }}
          >
            Operating at the crossroads of supply chain management, data science, and digitalization, our mission is to pioneer intelligent supply chains through the innovations stemming from our Think Tank. This strategic approach empowers BMW with enhanced adaptability to effectively navigate unforeseen challenges, leading to better products and lower costs.
          </span>
        </>
      ),
  },
  {
    url: process.env.PUBLIC_URL + "/Photos/slideshow/team-6-copy.jpeg",
    caption: (
      <>
        <span style={{ color: "white", marginBottom: "30px", fontWeight: 300 }}>
            Fostering Diversity and Inclusion
        </span>
        <br />
        <br />
        <span
          style={{
            fontSize: "16px",
            color: "white",
            lineHeight: "10px",
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 300,
          }}
        >
          Embracing diversity is at the heart of our success. Our dedicated team, comprised of individuals from various backgrounds and cultures, collaborates harmoniously to drive innovation, creativity, and excellence in everything we do. Together, we are building a brighter, more inclusive future.
        </span>
      </>
    ),
  },
  {
    url: process.env.PUBLIC_URL + "/Photos/slideshow/team-7.jpg",
    caption: (
      <>
        <span style={{ color: "white", marginBottom: "30px", fontWeight: 300 }}>
            Keeping it Fun!
        </span>
        <br />
        <br />
        <span
          style={{
            fontSize: "16px",
            color: "white",
            lineHeight: "10px",
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 300,
          }}
        >
            At our BMW Innovations Department, we believe that a positive work environment is essential for fostering creativity and innovation. We regularly organize team hangouts, dinners, and exciting events to keep the good times rolling. Because when work is enjoyable, the possibilities are endless!
        </span>
      </>
    ),
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide duration={10000} transitionDuration={500}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <div style={overlayStyle}></div>
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
