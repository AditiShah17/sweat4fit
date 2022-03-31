import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

// import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'

export default function UserProfile(props) {
    return (
        <>
            <p className="userprofile-heading">User Profile</p>

            <div className="userprofile-div">

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="../images/trainers/1.jpg" />
                    <hr />
                    <Card.Body>
                        <Card.Title>Jigar Donda</Card.Title>
                        <Card.Text>
                            <p>Role : - <span>Trainer</span></p>
                            <p>Email : - <span>jigar@donda.com</span></p>
                            <p>Gender : - <span>Male</span></p>
                            <p>Mobile number : - <span>+1(613)123-4567</span></p>
                        </Card.Text>

                        <Link className="nav-link" aria-current="page" to="/editprofile">
                            Edit Profile
                        </Link>
                        <Link className="nav-link" aria-current="page" to="/resetpassword">
                            Reset Password
                        </Link>
                    </Card.Body>
                </Card>

            </div>

        </>
    );
}
