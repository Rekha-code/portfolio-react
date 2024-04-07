import React from "react";
import "./Experience.css";
import theme_pattern from "../../assets/theme_pattern.svg";

const Experience = () => {
  return (
    <>
      <div className="experience" id="experience">
        <div className="experience-title">
          <h1>My Experience</h1>
          <img src={theme_pattern} alt="" />
        </div>
      </div>
    </>
  );
};

export default Experience;
