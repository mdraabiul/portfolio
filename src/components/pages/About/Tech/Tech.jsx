import React from "react";
import "./tech.css";

const Tech = ({ type, logos }) => {
  return (
    <div className="about__techs">
      <div className="about__techs-type">
        <p> {type} </p>
      </div>

      <div className="about__techs-body">
        {logos.map((logo, index) => (
          <div key={index} className="tech-logo">
            <div>
              <img
                src={logo.img}
                width={"48px"}
                alt="react"
              />
            </div>
            <div>
              <small> {logo.name} </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
