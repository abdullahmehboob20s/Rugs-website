import React from "react";
import "./JustRags.css";
import Rug1 from "assets/images/Rug1.png";
import Rug2 from "assets/images/Rug2.png";
import Rug3 from "assets/images/Rug3.png";
import Rug4 from "assets/images/Rug4.png";
import justRugsImg from "assets/images/just-rugs-img.png";

function JustRags() {
  return (
    <div className="JustRags-container">
      <div className="container-wrapper">
        <div className="JustRags">
          <div className="JustRags-left">
            <img src={Rug1} alt="" />
            <img src={Rug2} alt="" />
            <img src={Rug3} alt="" />
            <img src={Rug4} alt="" />
          </div>
          <div className="JustRags-right">
            <img src={justRugsImg} alt="" className="just-rugs-img mb-50px" />

            <p className="fs-40px weight-7 gray mb-20px">10,000 LEFT</p>

            <button className="mint-btn pointer fs-22px weight-5">Mint</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JustRags;
