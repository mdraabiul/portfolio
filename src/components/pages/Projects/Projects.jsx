import React from "react";
import "./projects.css";
import Project from "./Project/Project";
import { project1, project2 } from "../../images";

const Projects = () => {
  const portfolioProjects = [
    {
      header: "Covid-20",
      imageUrl: project1,
      desc: "Real-time information on the COVID-19 pandemic's impact at a county level. With this, users can easily track the spread of the virus, as well as the total number of cases, deaths, and recoveries in a variety of counties.",
      tags: ["Express", "Node", "React", "Redux", "TS"],
      liveLink: "https://cov-20.web.app",
    },
    {
      header: "Whatsapp-clone",
      imageUrl: project2,
      desc: "Real-time information on the COVID-19 pandemic's impact at a county level. With this, users can easily track the spread of the virus, as well as the total number of cases, deaths, and recoveries in a variety of counties.",
      tags: ["Express", "Node", "React", "Redux", "TS"],
      liveLink: "https://google.com",
    },
    {
      header: "Twitter-clone",
      imageUrl: project1,
      desc: "Real-time information on the COVID-19 pandemic's impact at a county level. With this, users can easily track the spread of the virus, as well as the total number of cases, deaths, and recoveries in a variety of counties.",
      tags: ["Express", "Node", "React", "Redux", "TS"],
      liveLink: "https://wikipedia.com",
    },
    {
      header: "MangoAmm",
      imageUrl: project2,
      desc: "Real-time information on the COVID-19 pandemic's impact at a county level. With this, users can easily track the spread of the virus, as well as the total number of cases, deaths, and recoveries in a variety of counties.",
      tags: ["Express", "Node", "React", "Redux", "TS"],
      liveLink: "https://bing.com",
    },
  ];

  return (
    <div className="projects" id="projects">
      <div className="projects__header">
        <h1>My projects</h1>
      </div>

      <div className="projects__cards">
        {portfolioProjects.map((pro, index) => (
          <Project key={index} pro={pro} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
