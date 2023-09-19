import React, { useEffect, useState } from "react";
import "./NavbarStyles.css";
import Slideshow from "./Slideshow";
import "./HomepageStyles.css";
import ValueCard from "./ValueCard";
import Testimonial from "./Testimonial";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";

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

  var settings = {
    dots: true,
  };

  const scrollToSection = (sectionId, offset) => {
    const targetSection = document.getElementById(sectionId);
    
    if (targetSection) {
      const yOffset = offset || 0;
      const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav>
        <div className="logo-div">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "/Photos/logos/bmw-logo-navbar.png"}
            alt=""
          />
          <div>
            <h2 className="department-name">Supply Chain Innovations</h2>
            <h2 className="department-name">Think Tank</h2>
          </div>
        </div>
        <ul>
          <li>
            <a onClick={() => scrollToSection("home", -80)}>Home</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("about-us", -25)}>About Us</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("our-values", -110)}>Our Values</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("testimonials", -80)}>Testimonials</a>
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
            src={process.env.PUBLIC_URL + "/Photos/car-side.png"}
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
              img={process.env.PUBLIC_URL + "/Photos/values/openness-value.jpeg"}
              description="We are excited by change and open to new opportunities. We learn from our mistakes in order to create our future. We take our colleagues' ideas seriously, because every little impulse can turn into something great."
            />
            <ValueCard
              value="Transparency"
              img={
                process.env.PUBLIC_URL + "/Photos/values/transparency-value.jpeg"
              }
              description="We do not embellish, but point out contradictions constructively. We act with integrity and talk to each other. This is the only way to create trust and bring our visions onto the streets."
            />
            <ValueCard
              value="Responsibility"
              img={
                process.env.PUBLIC_URL +
                "/Photos/values/responsibility-value.jpeg"
              }
              description="We take consistent decisions and commit to them personally. This allows us to work freely and more effectively. By taking responsibility for our own projects, we can develop ourselves further personally."
            />
            <ValueCard
              value="Trust"
              img={process.env.PUBLIC_URL + "/Photos/values/trust-value.jpeg"}
              description="We trust and rely on each other. We are a team that sticks together and only grows together. This is essential if we are to act swiftly and achieve our goals which take us further."
            />
            <ValueCard
              value="Appreciation"
              img={
                process.env.PUBLIC_URL + "/Photos/values/appreciation-value.jpeg"
              }
              description="We reflect on our actions, respect each other. Clarity, feedback and celebrating each other's success are crucial for a positive working atmosphere. Every individual makes a difference."
            />
          </div>
        </div>
        <div className="separator">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div id="testimonials" className="section-div">
          <h2 className="section-h2">What People Have to Say About Us</h2>
          <div className="section-slider-div" style={{ width: "100%" }}>
            <Slider {...settings} className="slider">
              <div className="testimonials-container">
                <Testimonial
                  img={
                    process.env.PUBLIC_URL +
                    "/Photos/team/Alena Sukhoverkhova.png"
                  }
                  text={`"My first few weeks in the PMO Performance Control and Digitalisation Operational Supply Chain role at BMW Group have been an absolute blast! 
                The company's commitment to innovation and digitalization is palpable, and it's exciting to be part of a team at the forefront of shaping the industry's future."`}
                  name="Alena Sukhoverkhova"
                  position="PMO"
                />
                <Testimonial
                  img={process.env.PUBLIC_URL + "/Photos/team/Julia Hehl.png"}
                  text={`"After almost a month at BMW Supply Chain
                Innovations Think Tank, I am happy that I joined such a motivated team, dedicated to bringing value to our business partners.
                I am looking forward to the future challenges, adding to the company's success together with my team mates!"`}
                  name="Julia Hehl"
                  position="Data Scientist"
                />
                <Testimonial
                  img={
                    process.env.PUBLIC_URL +
                    "/Photos/team/Mustafa Berkay Kuscu.png"
                  }
                  text={`"I am flattered by the warm welcome I received from the team, and I already feel as a part of it.
                Only in a couple of days, I was able to see the potential each person holds and it is impossible not to be fascinated by them.
                I am excited to see what the future holds for me here!"`}
                  name="Mustafa Berkay Kuscu"
                  position="PMO"
                />
              </div>
              <div className="testimonials-container">
                <Testimonial
                  img={
                    process.env.PUBLIC_URL + "/Photos/team/Jonathan Oelhafen.png"
                  }
                  text={`"The BMW Supply Chain Innovations ThinkTank brings together young, talented and motivated individuals from all over the world to use modern IT solutions to make supply chains and supplier relationships more efficient. I am looking forward to the challenges that lie ahead."`}
                  name="Jonathan Oelhafen"
                  position="Data Engineer"
                />
                <Testimonial
                  img={process.env.PUBLIC_URL + "/Photos/team/Yichun Xie.png"}
                  text={`"With supportive mentors, diverse opinions, and innovative minds, I have been encouraged to learn new technical tools, develop business insights, and contribute to fun projects which provide digital solutions to the current problems in the supply chain."`}
                  name="Yichun Xie"
                  position="Data Scientist"
                />
                <Testimonial
                  img={
                    process.env.PUBLIC_URL + "/Photos/team/Aabhash Dhakal.png"
                  }
                  text={`"When I look around me, I see ambitious, brilliant, experienced colleagues with a diverse set of ideas and skills. Everyone in the team is bringing their 'A-game' to the table, working on exciting projects which enable BMW to function without a hitch."`}
                  name="Aabhash Dhakal"
                  position="Data Scientist"
                />
              </div>
              <div className="testimonials-container">
                <Testimonial
                  img={
                    process.env.PUBLIC_URL +
                    "/Photos/team/Fridrik Gunnarsson.png"
                  }
                  text={`"All over the world, market-leading companies are working towards future-proofing their supply chains by increasing resilience, agility, and sustainability. Witnessing first-hand the approach taken by BMW, a world-leading company, has underscored to me its ambition and innovative culture."`}
                  name="Fridrik Gunnarsson"
                  position="MBA Intern"
                />
                <Testimonial
                  img={process.env.PUBLIC_URL + "/Photos/team/Sabine Farhat.png"}
                  text={`"I'm beyond excited to immerse myself in this dynamic and innovative environment, and I am honored to be a part of such a dynamic team that's driving the future of mobility. The team has immense passion and talent and I look forward to joining our skills to create a driving force of change and growth."`}
                  name="Sabine Farhat"
                  position="Data Scientist"
                />
                <Testimonial
                  img={
                    process.env.PUBLIC_URL + "/Photos/team/Clarissa Anjani.png"
                  }
                  text={`"What recent events have taught us is that the world can change extremely quickly. If one has an intelligent supply chain with products from the Think Tank, BMW can have more capacity to manage unpredictable emergencies, enabling better products and lower costs."`}
                  name="Clarissa Anjani"
                  position="Data Scientist"
                />
              </div>
            </Slider>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
