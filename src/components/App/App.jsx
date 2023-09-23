import React from "react";
import Navbar from "../Navbar/Navbar";
import "./app.css";

// pages
import { About, Contact, Footer, Hobby, Home, Projects } from "../pages";

const App = () => {
  return (
    <div className="app">

      <Navbar />
      <Home />
      <Projects />
      <About />
      <Hobby />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
