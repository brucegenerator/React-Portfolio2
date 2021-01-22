import React from "react";
import "../../App.css";
import Button from "../Button/Button";
import "./HeroSection.css";

function HeroSection(props) {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <h1>Welcome To My Portfolio Website!</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={props.onClick}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
