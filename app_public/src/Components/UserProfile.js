import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";

// import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'

export default function UserProfile(props) {

    // const [image, setImage] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [mobile, setMobile] = useState("");


    console.log("in userprofile function");

    const api = '/api/userprofile';
    const token = sessionStorage.getItem('userData');

    console.log("$tokon= " + `${token}`);

    React.useEffect(() => {
        axios.get(api, { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {

                console.log("data=", res.data);

                // setImage(res.data.files[0].filename);
                setFname(res.data.userdata.firstname);
                setLname(res.data.userdata.lastname);
                setRole(res.data.userdata.role_id);
                setEmail(res.data.userdata.email);
                setGender(res.data.userdata.gender);
                setMobile(res.data.userdata.mobile_no);

            }).catch((error) => {
                console.log(error)
            });

    }, [])

    return (
        <>
            <p className="userprofile-heading">Profile</p>

            <div className="userprofile-div">

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" />
                    <hr />
                    <Card.Body>
                        <Card.Title>{fname} {lname}</Card.Title>
                        <Card.Text>
                            <p>Role : - <span> {role == 1 ? (
                                "Trainer"
                            ) : (
                                "Trainee"
                            )}</span></p>
                            <p>Email : - <span>{email}</span></p>
                            <p>Gender : - <span>{gender}</span></p>
                            <p>Mobile number : - <span>{mobile}</span></p>
                        </Card.Text>

                        <Link className="nav-link" aria-current="page" to="/editprofile">
                            Edit Profile
                        </Link>
                        <Link className="nav-link" aria-current="page" to="/resetpassword">
                            Reset Password
                        </Link>
                        {role == 1 ? (
                            <>
                                <Link className="nav-link" aria-current="page" to="/addtrainerdocuments">
                                    Add Trainer Details
                                </Link>
                                <Link className="nav-link" aria-current="page" to="/edittraineravailability">
                                    Edit Availability
                                </Link>
                            </>
                        ) : (
                            console.log("Hello I am traineeeee")
                        )}


                    </Card.Body>
                </Card>

            </div>
        </>
    );
}
