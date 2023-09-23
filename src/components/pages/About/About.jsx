import React from "react";
import "./about.css";
import Tech from "./Tech/Tech";

import {
  html,
  css,
  scss,
  react,
  js,
  ts,
  // backend
  node,
  express,
  python,
  mysql,
  mongodb,
  firebase,
  // tools
  vscode,
  git,
  github,
  npm,
  pypi,
  postman,
} from "../../logos";


import { aboutMe } from "../../constants";


const About = () => {
  const frontEndLogos = [
    { name: "Html", img: html },
    { name: "Css", img: css },
    { name: "Scss", img: scss },
    { name: "Javascript", img: js },
    { name: "React", img: react },
    { name: "Typescript", img: ts },
  ];

  const backendLogos = [
    { name: "Node", img: node },
    { name: "Express", img: express },
    { name: "Python", img: python },

    { name: "MySql", img: mysql },
    { name: "Mongodb", img: mongodb },
    { name: "firebase", img: firebase },
  ];

  const tools = [
    { name: "VS code", img: vscode },
    { name: "Git", img: git },
    { name: "Github", img: github },

    { name: "NPM", img: npm },
    { name: "PYPI", img: pypi },
    { name: "Postman", img: postman },
  ];

  return (
    <div className="about" id="about">
      <div className="about__header">
        <h1>About Me</h1>
      </div>
      <div className="about__description">
        <p>{aboutMe}</p>
      </div>
      <div className="about__techs__header">
        <h1>Technologies I've Worked With </h1>
      </div>

      <main>
        <Tech type={"FrontEnd"} logos={frontEndLogos} />
        <Tech type={"Backend"} logos={backendLogos} />
        <Tech type={"Tools"} logos={tools} />
      </main>
    </div>
  );
};

export default About;
