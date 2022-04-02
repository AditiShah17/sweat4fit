import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";

// import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'

export default function EditTrainerAvailability(props) {


    const api = 'http://localhost:5000/api/addtraineravailability';
    const token = sessionStorage.getItem('userData');

    const addavailability = (event) => {

        var body = {
            day_id: event.target.days.value,
            start_time: event.target.starttime.value,
            end_time: event.target.endtime.value
        }

        event.preventDefault();

        axios({
            method: 'post',
            url: api,
            data: body,
            headers: { "Authorization": `Bearer ${token}` }
        }).then(res => {

            console.log("add availability data=", res.data);

        }).catch((err) => {
            console.log(err)
        });
    }


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

                    <form onSubmit={addavailability} className="edittraineravailability-addavailability-item">
                        <p>Select Day : -
                            <span>
                                <select name="days" id="days">
                                    <option value="6248d908713b62f7cd3b1f6f" selected>MONDAY</option>
                                    <option value="6248d908713b62f7cd3b1f70">TUESDAY</option>
                                    <option value="6248d908713b62f7cd3b1f71">WEDNESDAY</option>
                                    <option value="6248d908713b62f7cd3b1f72">THURSDAY</option>
                                    <option value="6248d908713b62f7cd3b1f73">FRIDAY</option>
                                    <option value="6248d908713b62f7cd3b1f74">SATURDAY</option>
                                    <option value="6248d908713b62f7cd3b1f75">SUNDAY</option>
                                </select>
                            </span>
                        </p>

                        <p>Enter Start Time : -
                            <span>
                                <input type="time" id="appt" name="starttime" min="09:00" max="18:00" required />
                            </span>
                        </p>

                        <p>Enter End Time : -
                            <span>
                                <input type="time" id="appt" name="endtime" min="09:00" max="18:00" required />
                            </span>
                        </p>

                        <input type="submit" className="add-btn" value="Add" />
                    </form>

                </div>

            </div>

        </>
    );
}
