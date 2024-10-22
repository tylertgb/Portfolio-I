import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_rgb.png";
import theme_pattern from "../../assets/theme_pattern.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-profile-box">
        <img className="profile-img" src={profile_img} alt="" />
        <img className="profile-pattern" src={theme_pattern} alt="" />
      </div>
      <h1>
        <span>I'm Bright Gobka,</span> Front-end Developer base in Ghana.
      </h1>
      <p>
        I am a front-end develope | engineer from Tamale, Ghana with 4 years of
        experience in multiple companies like Alnyaba Tech and Namibra.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
