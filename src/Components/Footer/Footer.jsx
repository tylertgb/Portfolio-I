import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.svg";
import linkedin_icon from '../../assets/icons-linkedin.svg'
import facebook_icon from '../../assets/icons-facebook.svg'
import instagram_icon from '../../assets/icons-instagram.svg'
import twitter_icon from '../../assets/icons-twitter.svg'

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" />
          <p>
            Stay connected with me
          </p>
          <div className="social-media-icons">
            <a href="#"><img src={linkedin_icon} alt="Linkedin" /></a>
            <a href="#"><img src={facebook_icon} alt="Facebook" /></a>
            <a href="#"><img src={instagram_icon} alt="Instagram" /></a>
            <a href="#"><img src={twitter_icon} alt="X" /></a>
          </div>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Email" name="email" />
          </div>
          <button type="footer_subscribe" className="footer-subscribe">
            Subscribe
          </button>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Bright Gobka. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Cockie Notice</p>
          <p>Content Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
