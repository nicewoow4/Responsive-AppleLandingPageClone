import React from "react";
import "./Home_section1.css";
import h1img from "../assets/home/applehead.png";

const Home_section1 = () => {
  return (
    <div className="h-sction1">
      <div className="h1-img">
        <img src={h1img} alt="" />
        <div className="h1-text">
          <h1>Apple Shopping Event</h1>
          <h6>
            From November 25 to 28, get an Apple Gift <br /> Card when you buy
            an eligible product.1
            <br />
          </h6>
          <p align="center">
            <a href="">Get an early look</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home_section1;
