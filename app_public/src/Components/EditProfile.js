import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";

// import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'

export default function EditProfile(props) {


    const api = 'http://localhost:5000/api/userprofile';
    const token = sessionStorage.getItem('userData');

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [gender, setGender] = useState("");
    const [mobile, setMobile] = useState("");

    console.log(gender);

    React.useEffect(() => {
        axios.get(api, { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {

                console.log("data=", res.data);

                // setImage(res.data.files[0].filename);
                setFname(res.data.userdata.firstname);
                setLname(res.data.userdata.lastname);
                setGender(res.data.userdata.gender);
                setMobile(res.data.userdata.mobile_no);

            }).catch((error) => {
                console.log(error)
            });
        // this.setState({firstname: fname, lastname: lname, gender: gender, mobile_no: mobile});
    }, [])


    const updateClicked = (event) => {

        var body = {
            firstname: event.target.fname.value,
            lastname: event.target.lname.value,
            gender: event.target.gender.value,
            mobile_no: event.target.phone.value
        }

        console.log("login form data= ", body);

        event.preventDefault();

        axios({
            method: 'post',
            url: api,
            data: body,
            headers: { "Authorization": `Bearer ${token}` }
        }).then(res => {

            console.log("data=", res.data);

        }).catch((err) => {
            console.log("in catch");
            console.log(err)
        });
    }
    return (
        <>
            <p className="editprofile-heading">Edit Profile</p>

            <div className="userprofile-div">

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Text>
                            <form onSubmit={updateClicked}>
                                {/* <Form.Group controlId="formFileLg" className="mb-3">
                                    <Form.Label>Please Select Profile Photo : - </Form.Label>
                                    <Form.Control type="file" size="lg" name="imageselect" accept="image/*" required />
                                </Form.Group> */}

                                <p>First Name : - <span><input type="Text" id="text" name="fname" placeholder="Enter First Name" defaultValue={fname} required /></span></p>
                                <p>Last Name : - <span><input type="Text" id="text" name="lname" placeholder="Enter Last Name" required defaultValue={lname} /></span></p>

                                {/* <p>Email : - <span><input type="email" id="email" name="email" placeholder="Enter Email" /></span></p> */}
                                <p>Gender : -
                                    <span>
                                        <input type="radio" id="male" name="gender" value="Male" required/>
                                        <label for="male">Male</label>
                                        <input type="radio" id="female" name="gender" value="Female" />
                                        <label for="female">Female</label>
                                    </span></p>
                                <p>Mobile number : -
                                    <span>
                                        <input type="tel" id="phone" name="phone" placeholder="1234567890" pattern="[0-9]{10}" defaultValue={mobile} required />
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