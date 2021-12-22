import "./App.css";
import About from "layouts/About/About";
import JustRags from "layouts/JustRugs/JustRags";
import Navbar from "layouts/Navbar/Navbar";
import Team from "layouts/Team/Team";
import React from "react";
import Fade from "react-reveal/Fade";

function App() {
  return (
    <div>
      <Navbar />
      <Fade top distance="30px">
        <div className="mb-50px">
          <JustRags />
        </div>
      </Fade>

      <Fade left distance="200px">
        <div className="mb-100px" id="about">
          <About />
        </div>
      </Fade>

      <Fade right distance="200px">
        <div className="mb-100px">
          <Team />
        </div>
      </Fade>
    </div>
  );
}

export default App;
