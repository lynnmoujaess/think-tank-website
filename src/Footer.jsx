import React from "react";
import "./FooterStyles.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="content-container">
        <div className="content-div">
          <h2 className="links-title">Useful Links</h2>
          <a href="mailto: sabine.farhat@bmw.de">Contact</a>
          <a href="https://www.bmwgroup.com/de.html">BMW Group</a>
          <a href="http://www.bmwgroup-plants.com/">BMW Group Plants</a>
          <a href="https://www.bmwgroup.jobs">BMW Group Careers</a>
          <a href="http://www.bmwusa.com/Standard/Content/CompanyInformation/">
            Company Information
          </a>
        </div>
        <div className="content-div">
          <h2 className="links-title">Get in Touch</h2>
          <div className="social-media-div">
            <div>
              <a href="https://www.facebook.com/BMWGroup">
                <FaFacebookF size={15} />
              </a>
              <a
                className="social-media-text"
                href="https://www.facebook.com/BMWGroup"
              >
                Facebook
              </a>
            </div>
            <div>
              <a href="https://twitter.com/BMWGroup">
                <FaTwitter size={15} />
              </a>
              <a
                className="social-media-text"
                href="https://twitter.com/BMWGroup"
              >
                Twitter
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/bmwgroup/">
                <FaInstagram size={17} />
              </a>
              <a
                className="social-media-text"
                href="https://www.instagram.com/bmwgroup/"
              >
                Instagram
              </a>
            </div>
            <div>
              <a href="http://www.youtube.com/BMWGroupView">
                <FaYoutube size={17} />
              </a>
              <a
                className="social-media-text"
                href="http://www.youtube.com/BMWGroupView"
              >
                Youtube
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/company/bmw-group/">
                <FaLinkedin size={17} />
              </a>
              <a
                className="social-media-text"
                href="https://www.linkedin.com/company/bmw-group/"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="logos-div">
        <img style={{width: "6%"}}
          src={process.env.PUBLIC_URL + "Photos/logos/bmw-group-logo.png"}
          alt=""
        />
        <img style={{width: "5%"}}
          src={process.env.PUBLIC_URL + "Photos/logos/bmw-logo.png"}
          alt=""
        />
        <img style={{width: "6%"}}
          src={process.env.PUBLIC_URL + "Photos/logos/mini-cooper-logo.png"}
          alt=""
        />
        <img style={{width: "9%"}}
          src={process.env.PUBLIC_URL + "Photos/logos/rolls-royce-logo.png"}
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
