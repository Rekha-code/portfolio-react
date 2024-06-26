import React from "react";
import "./Education.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Education = () => {
  return (
    <div className="services" id="education">
      <div className="services-title">
        <h1>My Education</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-formate">
              <h2>{service.school}</h2>
              <h3>{service.s_name}</h3>
              {/* <p>{service.s_desc}</p> */}
              <p>{service.s_grade}</p>
              {/* <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
