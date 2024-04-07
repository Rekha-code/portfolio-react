import React from "react";
import "./About.css";
import heroimg from "../../assets/HeroImage.jpg";
import theme_pattern from "../../assets/theme_pattern.svg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={heroimg} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a motivated and versatile individual, always eager to take on
              new challenges. With a passion for learning I am dedicated to
              delivering high-quality results.
            </p>
            <p>
              With a positive attitude and a growth mindset, I am ready to make
              a meaningful contribution and achieve great things.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>Next Js</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Node Js</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achivement">
          <h1>4+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>30+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
