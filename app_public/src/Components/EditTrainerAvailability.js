import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

// import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'

export default function EditTrainerAvailability(props) {
    return (
        <>
            <p className="edittraineravailability-heading">Edit Trainer Availability</p>

            <div className="edittraineravailability-div">

                <div className="edittraineravailability-display">
                    <p className="edittraineravailability-div-heading">Availability</p>
                    <div className="edittraineravailability-items">
                        <Card>
                            <Card.Header as="h5">MONDAY</Card.Header>
                            <Card.Body>
                                <Card.Text>12:00PM - 03:00PM</Card.Text>

                                <Button variant="primary">Delete</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="edittraineravailability-items">
                        <Card>
                            <Card.Header as="h5">TUESDAY</Card.Header>
                            <Card.Body>
                                <Card.Text>12:00PM - 03:00PM</Card.Text>

                                <Button variant="primary">Delete</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div className="edittraineravailability-addavailability">
                    <p className="edittraineravailability-div-heading">Add Availability</p>

                    <div className="edittraineravailability-addavailability-item">
                        <p>Select Day : -
                            <span>
                                <select name="days" id="days">
                                    <option value="1" selected>MONDAY</option>
                                    <option value="2">TUESDAY</option>
                                    <option value="3">WEDNESDAY</option>
                                    <option value="4">THURSDAY</option>
                                    <option value="5">FRIDAY</option>
                                    <option value="6">SATURDAY</option>
                                    <option value="7">SUNDAY</option>
                                </select>
                            </span>
                        </p>

                        <p>Enter Start Time : -
                            <span>
                                <input type="time" id="appt" name="appt" min="09:00" max="18:00" required/>
                            </span>
                        </p>

                        <p>Enter End Time : -
                            <span>
                                <input type="time" id="appt" name="appt" min="09:00" max="18:00" required/>
                            </span>
                        </p>

                        <input type="submit" className="add-btn" value="Add" />
                    </div>

                </div>

            </div>

        </>
    );
}
