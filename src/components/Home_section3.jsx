import React from "react";
import "./Home_section3.css";
import watch from "../assets/home/promo_watch_series_6_lte__f8lrasjnry2y_small.jpg";
import imac from "../assets/home/promo_imac__crg641tip4q6_small.jpg";
import watchlogo from "../assets/home/promo_logo_watch_series_6_medium.png";
import imaclogo from "../assets/home/logo-imac-price-page.webp";
const Home_section3 = () => {
  return (
    <div className="h-section3">
      <div className="watch">
        <div className="watch-logo">
          <img src={watchlogo} alt="" />
        </div>
        <img src={watch} alt="" />
      </div>
      <div className="imac">
        <div className="m1-logo">
          <img src={imaclogo} alt="" />
        </div>
        <img src={imac} alt="" />
      </div>
    </div>
  );
};

export default Home_section3;
