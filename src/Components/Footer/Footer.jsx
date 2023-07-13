import React from "react";
import Logo from "../../assets/logowhite.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-inner_container">
        <div className="footer-flex">
          <div className="footer-logo">
            <img src={Logo} alt={Logo} />
            <p style={{ marginTop: "14px" }}>
              OurStudio is a digital agency UI / UX Design and Website
              Development located in Ohio, United States of America
            </p>
            <p>copyright Tanah Air Studio</p>
          </div>
          <div className="footer-social_media">
            <ul>
              <li>Our Social Media</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
