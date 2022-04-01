import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";

// import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'

export default function UserProfile(props) {

    console.log("in userprofile function");

    const api = 'http://localhost:5000/api/userprofile';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDM3MTdhOTg3YjMzYzE5YzNlOGJjYiIsImlhdCI6MTY0ODc3MDg4OX0.vz3u4R1zl2qccBT_5RxMpclsOkSW28-bkC11Gbp8Hcg';

    console.log("$tokon= "+ `${token}`);
    axios.get(api, { headers: { "Authorization": `Bearer ${token}`} })
        .then(res => {

            console.log(res.data);

        }).catch(err => alert(err.response.data.Message));


        // const instance = axios.create({
        //     baseURL: 'http://localhost:5000/api/userprofile',
        //     headers: {'Authorization': 'Bearer '+token}
        //   });
          
        //   instance.get('/path')
        //   .then(response => {
        //       return response.data;
        //   })

    //     const api = 'your api';
    //     const token = JSON.parse(sessionStorage.getItem('data'));
    //     const token = user.data.id; /*take only token and save in token variable*/
    //     axios.get(api, { headers: { "Authorization": `Bearer ${token}` } })
    //         .then(res => {
    //             console.log(res.data);
    // .catch ((error) => {
    //                 console.log(error)
    //             });

    return (
        <>
            {/* <p className="userprofile-heading">User Profile</p>

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

            </div> */}

        </>
    );
}
