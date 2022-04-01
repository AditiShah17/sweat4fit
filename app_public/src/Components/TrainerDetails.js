import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

// import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'

export default function TrainerDetails(props) {
    return (
        <>
            <p className="trainerdetails-heading">Trainer Details</p>

            <div className="trainerdetails-div">
                <dir className="trainerdetails-image">
                    <img src="../images/trainers/1.jpg" alt="" />
                </dir>
                <div className="trainerdetails-text">
                    <div>
                        <h2>Trainer Name</h2>
                        <p><b>Skills</b> : - <span>yoga, dance</span></p>
                        <p><b>Experience</b> : - <span>5 Years</span></p>
                        <p><b>Age</b> : - <span>32 Years</span></p>
                        <p><b>Description</b> : - <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exerc esse cillum dolore Lorem
                            ipsum dolor sit amet, consectetur.</span></p>
                    </div>
                </div>
            </div>

        </>
    );
}
