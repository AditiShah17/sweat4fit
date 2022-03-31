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
            <p className="editprofile-heading">Edit Profile</p>

            <div className="userprofile-div">

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            <form>
                                <Form.Group controlId="formFileLg" className="mb-3">
                                    <Form.Label>Please Select Profile Photo : - </Form.Label>
                                    <Form.Control type="file" size="lg" accept="image/*" required />
                                </Form.Group>

                                <p>First Name : - <span><input type="Text" id="text" name="text" placeholder="Enter First Name" required/></span></p>
                                <p>Last Name : - <span><input type="Text" id="text" name="text" placeholder="Enter Last Name" required/></span></p>

                                {/* <p>Email : - <span><input type="email" id="email" name="email" placeholder="Enter Email" /></span></p> */}
                                <p>Gender : -
                                    <span>
                                        <input type="radio" id="male" name="gender" value="MALE" checked />
                                        <label for="male">Male</label>
                                        <input type="radio" id="female" name="gender" value="FEMALE" />
                                        <label for="female">Female</label>
                                    </span></p>
                                <p>Mobile number : -
                                    <span>
                                        <input type="tel" id="phone" name="phone" placeholder="1234567890" pattern="[0-9]{10}" required />
                                        <small>Format: 1234567890</small>
                                    </span></p>
                                <input type="submit" className="update-btn" value="Update" />
                            </form>

                        </Card.Text>

                    </Card.Body>
                </Card>

            </div>

        </>
    );
}