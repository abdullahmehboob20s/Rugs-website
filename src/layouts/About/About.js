import React from "react";
import "./About.css";
import Rug_Gif from "assets/images/Rug_Gif.gif";

function About() {
  return (
    <div className="container-wrapper">
      <h1 className="fs-50px text-center mb-50px uppercase">About</h1>
      <div className="about">
        <div className="about-left">
          <img src={Rug_Gif} className="Rug_Gif" alt="" />
        </div>
        <div className="about-right">
          <div>
            <p className="fs-40px weight-5">No Roadmap</p>
            <p className="fs-40px weight-5">No Rug Pulls</p>
            <p className="fs-40px weight-5 italic">Just Rugs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
