import React from "react";
import "./Team.css";
import Record from "assets/images/Record.jpeg";

function Team() {
  return (
    <div className="container-wrapper " id="team">
      <h1 className="fs-50px text-center mb-50px uppercase">Team</h1>

      <div className="team">
        <div className="team-left">
          <p className="fs-20px weight-5 gray lh-30px mb-15px">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ea
            est, quia pariatur corporis natus beatae quibusdam vitae rerum vero
            sint ab asperiores itaque? Quia sit quam reiciendis perspiciatis
            delectus.
          </p>
          <p className="fs-20px weight-5 gray lh-30px">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ea
            est, quia pariatur corporis natus beatae quibusdam vitae rerum vero
            sint ab asperiores itaque? Quia sit quam reiciendis perspiciatis
            delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Maxime ea est, quia pariatur corporis natus beatae quibusdam vitae
            rerum vero sint ab asperiores itaque? Quia sit quam reiciendis
            perspiciatis delectus.
          </p>
        </div>
        <div className="team-right">
          <img src={Record} alt="" />
          <p className="fs-40px weight-5">Username</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
