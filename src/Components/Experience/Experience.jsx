import React from "react";
import "./Experience.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Experience_Data from "../../assets/experiences";

const Experience = () => {
  return (
    <>
      <div className="experience" id="experience">
        <div className="experience-title">
          <h1>My Experience</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="experience-container">
          {Experience_Data.map((experience, index) => {
            return (
              <div key={index} className="experience-formate">
                <h2>{experience.role}</h2>
                <h3>{experience.company}</h3>
                <p>{experience.desc}</p>
                <p>{experience.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Experience;
