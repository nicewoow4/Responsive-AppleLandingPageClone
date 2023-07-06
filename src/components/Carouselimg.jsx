import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../assets/support/hero-banner-baker-homepage.image.large_2x.jpg";
import slide2 from "../assets/music/appsfromapple_large.jpg";
import vdo from "../assets/music/intro.mp4";
import { Button } from "react-bootstrap";
function Carouselimg() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://is4-ssl.mzstatic.com/image/thumb/TFK62rQMTTWVNoPgxjIkPQ/1378x774.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <button
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "50px",
                padding: "10px 20px",
                marginBottom: "15px",
              }}
            >
              Strem now ▶
            </button>

            <p> Let them think they're in control.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://is2-ssl.mzstatic.com/image/thumb/JdmLVQN99mIa15_uECg4uw/1378x774.jpg"
            alt="First slide"
            style={{ width: "50px" }}
          />
          <Carousel.Caption>
            <button
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "50px",
                padding: "10px 20px",
                marginBottom: "15px",
              }}
            >
              Strem now ▶
            </button>
            <p>Sci-Fi The truth will surface</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://is3-ssl.mzstatic.com/image/thumb/JJo1Kp84yVQ1emwipSnq2A/1378x774.jpg"
            alt="First slide"
            style={{ width: "50%" }}
          />
          <Carousel.Caption>
            <button
              style={{
                backgroundColor: "white",
                color: "black",
                borderRadius: "50px",
                padding: "10px 20px",
                marginBottom: "15px",
              }}
            >
              Strem now ▶
            </button>
            <p>Thriller The facts are never the whole story.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carouselimg;
