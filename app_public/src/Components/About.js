import React from "react";
import Figure from "react-bootstrap/Figure";

// import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'

export default function About(props) {
  return (
    <>
      <div className="heroimage-div">
        <img src="../images/covers/aboutus_main.jpg" alt="" />
        <div class="centered">ABOUT US</div>
      </div>

      {/* about us description */}
      <div className="about-description-div">
        <div className="about-decription-text">
          <div>
            <h2>Heading 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exerc esse cillum dolore Lorem
              ipsum dolor sit amet, consectetur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exerc esse cillum dolore Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exerc esse cillum dolore Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor.
            </p>
          </div>
          <div>
            <h2>Heading 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exerc esse cillum dolore Lorem
              ipsum dolor sit amet, consectetur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exerc esse cillum dolore Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exerc esse cillum dolore Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor.
            </p>
          </div>
          <div>
            <h2>Heading 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exerc esse cillum dolore Lorem
              ipsum dolor sit amet, consectetur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exerc esse cillum dolore Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exerc esse cillum dolore Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor.
            </p>
          </div>
        </div>
        <dir className="about-decription-image">
          <img src="../images/trainers/1.jpg" alt="" />
        </dir>
      </div>
    </>
  );
}
