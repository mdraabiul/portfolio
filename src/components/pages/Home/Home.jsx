import React from "react";
import "./home.css";

import { introduction } from "../../constants";
import profilePicture from '../../images/profile.png'


const Home = () => {
  return (
    <div id="home" className="home">


      <div className="home__profile">
        <img src={profilePicture} alt="profile-pic" />
      </div>
      <div className="home__title">
        <h1>
          Hello! I'm Rabiul, <br /> Full Stack Developer <br /> from Bangladesh.
        </h1>
      </div>

      <div className="home__description">
        <p>{introduction}</p>
      </div>

      <div className="home__visitProjects">
        <button
          onClick={() => (window.location.href = "/#projects")}
          className="home__visitProjects-btn"
        >
          View My Projects
        </button>

        <button
          className="home__HireMe-btn"
          onClick={() => (window.location.href = "/#contact")}
        >
          Hire me
        </button>
      </div>
    </div>
  );
};

export default Home;
