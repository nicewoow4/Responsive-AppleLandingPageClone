import { useState } from "react";

import { Container, Navbar, Nav } from "react-bootstrap";
import "./Head.css";
import Applelogo from "../assets/header/apple-logo.svg";
import Searchlogo from "../assets/header/search-icon.svg";
import Baglogo from "../assets/header/bag-icon.svg";
import { FiCode, FiMenu, FiX } from "react-icons/fi";

const Head = () => {
  //function click
  const [click, setClick] = useState(false);
  const handleclick = () => setClick(!click);
  //console.log(click)

  //close menu
  const closemenu = () => setClick(false);

  return (
    <>
      <div className="sticky-top">
        <div className="header">
          <div className="container-nav">
            <div className="hearder-con">
              <div className="logo-nav">
                <a href="">
                  <img src={Applelogo} alt="" />
                </a>
              </div>

              <ul className={click ? "menu-nav active" : "menu-nav"}>
                <li className="manu-link" onClick={closemenu}>
                  <a href="">Home</a>
                </li>
                <li className="manu-link" onClick={closemenu}>
                  <a href="">Store</a>
                </li>
                <li className="manu-link" onClick={closemenu}>
                  <a href="">Mac</a>
                </li>
                <li className="manu-link" onClick={closemenu}>
                  <a href="">iPad</a>
                </li>
                <li className="manu-link" onClick={closemenu}>
                  <a href="">iPhone</a>
                </li>
                <li className="manu-link" onClick={closemenu}>
                  <a href="">Watch</a>
                </li>
                <li className="manu-link" onClick={closemenu}>
                  <a href="">AirPods</a>
                </li>
                <li className="manu-link" onClick={closemenu}>
                  <a href="">TV&Home</a>
                </li>

                <li className="manu-link" onClick={closemenu}>
                  <a href="">Accessories</a>
                </li>
                <li className="manu-link" onClick={closemenu}>
                  <a href="">Support</a>
                </li>
                <li className="manu-link" onClick={closemenu}>
                  <a href="">
                    <img src={Searchlogo} alt="" />
                  </a>
                </li>
                <li className="manu-link" onClick={closemenu}>
                  <a href="">
                    <img src={Baglogo} alt="" />
                  </a>
                </li>
              </ul>
              <div className="mobile-menu" onClick={handleclick}>
                {click ? <FiX /> : <FiMenu />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Head;
