import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link,  useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import axios from "axios";

// import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'

export default function UserProfile(props) {

    const [image, setImage] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [mobile, setMobile] = useState("");
    const[trainer,setTrainerId]= useState("");

    console.log("in userprofile function");

    const api = '/api/userprofile';
    const token = sessionStorage.getItem('userData');
    

    console.log("$tokon= " + `${token}`);

    React.useEffect(() => {
        axios.get(api, { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {

                console.log("data====", res.data.trainer_id);
                sessionStorage.setItem('trainerid',res.data.trainer_id);
                // setImage(res.data.files[0].filename);
                setFname(res.data.user.firstname);
                setLname(res.data.user.lastname);
                setRole(res.data.user.role_id);
                setEmail(res.data.user.email);
                setGender(res.data.user.gender);
                setMobile(res.data.user.mobile_no);
                setTrainerId(res.data.trainer_id);
                setId(res.data.user._id);
            }).catch((error) => {
                console.log(error)
            });

    }, [])

    console.log("image==", image);

    let history = useHistory();

    const [uderid, setId] = useState([]);


    return (
        <>
            <p className="userprofile-heading">Profile</p>

            <div className="userprofile-div">

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} style={{backgroundImage: "url('../images/profile.png')", width: "15rem", height: "15rem", backgroundSize: 'cover', overflow: 'hidden'}} />
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
                        {trainer ==  null? (
                            <>
                                <Link className="nav-link" to="/addtrainerdocuments">
                                    Trainer's ADD Details
                                </Link>
                                
                            </>
                        ) : (
                            <>
                            <Link className="nav-link" to="/edittrainer">
                            Trainer Edit Details
                        </Link>
                        <Link className="nav-link" aria-current="page" to="/edittraineravailability">
                            Edit Availability
                        </Link>
                            </>
                            
                        )}


                    </Card.Body>
                </Card>

            </div>
        </>
    );
}
