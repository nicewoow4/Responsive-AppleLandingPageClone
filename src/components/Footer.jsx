import React, { useState } from "react";
import "./Footer.css";
import { BiPlus } from "react-icons/bi";
import { FiX } from "react-icons/fi";

function Footer() {
    //footer mobile
  const [click2, setClick2] = useState(false);
  const handleclick2 = () => setClick2(!click2);

  const [click3, setClick3] = useState(false);
  const handleclick3 = () => setClick3(!click3);

  const [click4, setClick4] = useState(false);
  const handleclick4 = () => setClick4(!click4);

  const [click5, setClick5] = useState(false);
  const handleclick5 = () => setClick5(!click5);

  return (
    <div className="footer-bg">
      <div className="ft-content">
        <p>
          1. Qualified Purchasers receive an Apple Gift Card when they purchase
          an eligible Mac or iPad at a Qualifying Location. Only one Apple Gift
          Card per eligible Mac or iPad per Qualified Purchaser. Offer subject
          to availability. While supplies last. View full terms and conditions
          of offer here.
        </p>
        <p>
          Apple Vision Pro has not been authorized as required by the rules of
          the Federal Communications Commission. This device is not, and may not
          be, offered for sale or lease, or sold or leased, until authorization
          is obtained.
        </p>
        <p>
          Apple Vision Pro will be available early next year on apple.com and at
          Apple retail stores in the U.S.
        </p>
        <p>
          To access and use all the features of Apple Card, you must add Apple
          Card to Wallet on an iPhone or iPad with the latest version of iOS or
          iPadOS. Update to the latest version by going to Settings General
          Software Update. Tap Download and Install.
        </p>
        <p>Available for qualifying applicants in the United States.</p>
        <hr />
        <div className="flex-container">
          <div className="list">
            <div className="ft-mobile">
              <ul>Shop and Learn </ul>
              <div className="ft-mobile-menu" onClick={handleclick2}>
                {click2 ? <FiX /> : <BiPlus />}
              </div>
            </div>
            <ul className={click2 ? "ft-menu-nav active" : "ft-menu-nav"}>
              <li className="ft-manu-link">
                <a href="/">Store</a>
              </li>
              <li className="ft-manu-link">
                <a href="/">Mac</a>
              </li>
              <li className="ft-manu-link">
                <a href="/">iPad</a>
              </li>
              <li className="ft-manu-link">
                <a href="/">iPhone</a>
              </li>
              <li className="ft-manu-link">
                <a href="/">Watch</a>
              </li>
              <hr />
            </ul>
          </div>


          <div className="list">
            <div className="ft-mobile">
              <ul>Apple Store </ul>
              <div className="ft-mobile-menu" onClick={handleclick3}>
                {click3 ? <FiX /> : <BiPlus />}
              </div>
            </div>
            <ul className={click3 ? "ft-menu-nav active" : "ft-menu-nav"}>
              <li className="ft-manu-link2">
                <a href="/">Find a Store</a>
              </li>
              <li className="ft-manu-link2">
                <a href="/">Genius Bar</a>
              </li>
              <li className="ft-manu-link2">
                <a href="/">Today at Apple</a>
              </li>
              <li className="ft-manu-link2">
                <a href="/">Apple Camp</a>
              </li>
              <li className="ft-manu-link2">
                <a href="/">Shopping Help</a>
              </li>
              <hr />
            </ul>
          </div>
          <div className="list">
            <div className="ft-mobile">
              <ul>Apple Wallet </ul>
              <div className="ft-mobile-menu" onClick={handleclick4}>
                {click4 ? <FiX /> : <BiPlus />}
              </div>
            </div>
            <ul className={click4 ? "ft-menu-nav active" : "ft-menu-nav"}>
              <li className="ft-manu-link3">
                <a href="/">Wallet</a>
              </li>
              <li className="ft-manu-link3">
                <a href="/">Apple Card</a>
              </li>
              <li className="ft-manu-link3">
                <a href="/">iPad</a>
              </li>
              <li className="ft-manu-link3">
                <a href="/">Apple Pay</a>
              </li>
              <li className="ft-manu-link3">
                <a href="/">Apple Cash</a>
              </li>
              <hr />
            </ul>
          </div>
          <div className="list">
            <div className="ft-mobile">
              <ul>Shop and Learn </ul>
              <div className="ft-mobile-menu" onClick={handleclick5}>
                {click5 ? <FiX /> : <BiPlus />}
              </div>
            </div>
            <ul className={click5 ? "ft-menu-nav active" : "ft-menu-nav"}>
              <li className="ft-manu-link">
                <a href="/">Store</a>
              </li>
              <li className="ft-manu-link">
                <a href="/">Mac</a>
              </li>
              <li className="ft-manu-link">
                <a href="/">iPad</a>
              </li>
              <li className="ft-manu-link">
                <a href="/">iPhone</a>
              </li>
              <li className="ft-manu-link">
                <a href="/">Watch</a>
              </li>
              <hr />
            </ul>
          </div>
        </div>
       <br />
        <p>More ways to shop: Find an Apple Store or other retailer near you. Or call 1-800-MY-APPLE.</p>
        <hr />
        <div className="copy-r">
            <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
            <p>Privacy Policy Terms of Use Sales and Refunds Legal Site Map</p>
            <p>United States</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
