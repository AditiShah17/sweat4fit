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
            <h2>What Is Sweat4fit</h2>
            <p>
              Sweat4fit is the world's largest online fitness and nutrition community. The company started its journey as a small WhatsApp group that used to train a few people and help them get fit. Today, it is one of the most informative and engaging fitness communities with more than 2.5 million members.
            </p>
            <p>
              A software engineer who transformed himself while working a 12-hour/day IT job. He created the fundamental training methodology and shared it through his free book "Get Shredded" to prove that anyone can get fit with the knowledge of Quantified Nutrition. The fitness mantra underpinning Sweat4fit is to educate and empower the end-user to transform and inspire others to get fit.
            </p>
            <p>
              The Sweat4fit app serves as a one-stop solution for all health and fitness guidance and related needs. Through its freemium model, Sweat4fit offers free access to a host of industry-standard diet and training through trainers, a number of other cutting-edge features, and a community of fitness experts and enthusiasts. Users can get personalised guidance, customised plans and weekly follow-ups with one of Sweat4fit's 500+ certified coaches by paying a small premium.
            </p>

            <p>
              At Sweat4fit, we provide a safe space that is free of judgement. Till date, we have helped transform the health and lifestyle of more than 200,000 people from across the globe and from all walks of life.
            </p>
          </div>

        </div>
        <div className="about-decription-image">
          <img src="../images/trainers/1.jpg" alt="" />
        </div>
      </div>
    </>
  );
}
