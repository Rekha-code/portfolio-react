import React from "react";
import "./Hero.css";
import heroimg from "../../assets/HeroImage.jpg";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={heroimg} alt="" className="heroimg" />
      <h1>
        <span>I'm Rekha Gorde,</span>FullStack developer.
      </h1>
      <p>
        I am a fullstack developer with structuring, developing and implementing
        interactive projects efficiently, with attractive user- friendly
        interface to satisfy customer requirements.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a href="https://www.linkedin.com/in/rekha-suhas-gorde-a66732221/">
            Linkedin Profile
          </a>
        </div>
        <div className="hero-resume">
          <a href="https://showcase.talenlio.com/r/undefined---Rekha-Gorde-12580">
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
