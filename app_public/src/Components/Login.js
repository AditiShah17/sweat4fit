import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'

export default function Login(props) {
    return (
        <>
            <div className="heroimage-div">
                <img src="../images/covers/contactus_main.jpg" alt="" />
                <div class="centered">Login</div>
            </div>

            <div className="login-div">
                <div className="login-form">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Link className="nav-link" aria-current="page" to="/forgotpassword">
                            Forgot Password
                        </Link>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
}
