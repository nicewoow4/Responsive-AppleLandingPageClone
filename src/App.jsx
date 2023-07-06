import "./App.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./components/Head";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Head_Promo from "./components/Head_Promo";
import Home_section1 from "./components/Home_section1";
import Iphone from "./components/Iphone";
import Home_section3 from "./components/Home_section3";
import Footer from "./components/Footer";
import Carouselimg from "./components/Carouselimg";

function App() {
  return (
    <>
      <Head />
      <Head_Promo />
      <Home_section1 />
      <Iphone />
      <Home_section3 />
      <Carouselimg/>
      <Footer/>
    </>
  );
}

export default App;
