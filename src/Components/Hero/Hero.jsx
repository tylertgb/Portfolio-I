import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'am Bright Gobka,</span> Front-end Developer base in Ghana.
      </h1>
      <p>
        I am a front-end develope|engineer from Tamale, Ghana with 4 years of experience in multiple companies like Alnyaba Tech and Namibra
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
