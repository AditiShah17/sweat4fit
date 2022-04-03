import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'

export default function AddTrainerDocuments(props) {

    const token = sessionStorage.getItem('userData');

    const location = useLocation();

    const addtrainerdocumentapi = '/api/trainers';
    console.log("doc api=", addtrainerdocumentapi);


    const addtrainerdocuments = (event) => {


        const reqFiles = [];

        for (var i = 0; i < event.target.files.length; i++) {
            reqFiles.push(event.target.files[i].filename)
        }

        var body = {
            experience: event.target.experience.value,
            skills: event.target.skills.value,
            description: event.target.description.value,
            age: event.target.age.value,
            document_file: reqFiles
        }

        event.preventDefault();

        axios({
            method: 'put',
            url: addtrainerdocumentapi,
            data: body,
            headers: { "Authorization": `Bearer ${token}`, "Content-Type": "multipart/form-data" }
        }).then(res => {

            console.log("trainer updat data=", res.data);
            alert("Added Successfully");

        }).catch((err) => {

            console.log(err)
        });
    }

    return (
        <>
            <p className="addtrainerdocuments-heading">Trainer Details</p>

            <div className="addtrainerdocuments-div">

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            <form onSubmit={addtrainerdocuments}>

                                <p>Experience : - <span><input type="Number" id="experience" name="experience" placeholder="Enter Experience in number of years" required /></span></p>

                                <p>Skills : - <span><textarea id="skills" name="skills" placeholder="Enter your Skills" rows="1" cols="50" required /></span></p>

                                <p>Description : - <span><textarea id="description" name="description" placeholder="Enter your Description" rows="1" cols="50" required /></span></p>

                                <p>Age : - <span><input type="Number" id="age" name="age" placeholder="Enter your Age" required /></span></p>

                                <Form.Group controlId="formFileLg" className="mb-3">
                                    <Form.Label>Please Select Document to upload : - </Form.Label>
                                    <Form.Control type="file" size="lg" name="files" accept=".doc,.pdf" multiple required />
                                    <Form.Label style={{ color: "red" }}>Please Select maximum 5 files and Documents required for admin verification only.</Form.Label>
                                </Form.Group>

                                <input type="submit" className="update-btn" value="Submit" />
                            </form>

                        </Card.Text>

                    </Card.Body>
                </Card>

            </div>

        </>
    );
}
