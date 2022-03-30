import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

// import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'

export default function AddTrainerDocuments(props) {
    return (
        <>
            <p className="addtrainerdocuments-heading">Add Trainer Documents</p>

            <div className="addtrainerdocuments-div">

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            <form>
    
                                <p>Experience : - <span><input type="Number" id="experience" name="experience" placeholder="Enter Experience in number of years" required/></span></p>

                                <p>Skills : - <span><textarea id="skills" name="skills" placeholder="Enter your Skills" rows="1" cols="50" required/></span></p>

                                <p>Description : - <span><textarea id="description" name="description" placeholder="Enter your Description" rows="1" cols="50" required/></span></p>

                                <p>Age : - <span><input type="Number" id="age" name="age" placeholder="Enter your Age" required/></span></p>
                                
                                <Form.Group controlId="formFileLg" className="mb-3">
                                    <Form.Label>Please Select Document to upload : - </Form.Label>
                                    <Form.Control type="file" size="lg" required />
                                </Form.Group>

                                <input type="submit" className="update-btn" value="Add" />
                            </form>

                        </Card.Text>

                    </Card.Body>
                </Card>

            </div>

        </>
    );
}
