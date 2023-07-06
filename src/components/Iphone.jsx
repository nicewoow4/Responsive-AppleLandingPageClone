import React from "react";
import "./Iphone.css";
import iphone14 from "../assets/iPhone 12/iphone14.png";

const Iphone = () => {
  return (
    <div className="ip-section">
      <div className="ip-img">
        <img src={iphone14} alt="" />
        <div className="ip-text">
          <h1>iPhone 14 </h1>
          <h5>Big and bigger.</h5>
          <div className="ip-ft d-flex justify-content-center">
            <div className="ip-ft1">
              <a href="">Learn more</a>
            </div>
            <div>
             
            </div>
            <div className="ip-ft2">
              <a href="">Buy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iphone;
