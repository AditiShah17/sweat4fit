import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link,  useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'

export default function Trainers(props) {

  let history = useHistory();

  const [alldata, setData] = useState([]);

  const api = '/trainers/';
  const token = sessionStorage.getItem('userData');
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDYyMmZiZTZmNGM0NmI2OGYyNDI5NiIsImlhdCI6MTY0ODc2NDk4MH0.J9OfvR43I0Iq4vESN39zGtqrvkr5oLFe6W59lOhd4oE';

  console.log("$tokon= " + `${token}`);


  React.useEffect(() => {

    axios.get(api, { headers: { "Authorization": `Bearer ${token}` } })
      .then(res => {

        console.log("trainers all data=", res.data);

        setData(res.data);

      }).catch((error) => {
        console.log(error)
      });

  }, [])

  console.log("alldata=", alldata);

  function trainerDescriptionFn(trainerid) {
    console.log("Trainer id=", trainerid);

    history.push({
      pathname: '/trainerdetails',
      id: trainerid
    });

  }


  return (
    <>
      <div className="heroimage-div">
        <img src="../images/covers/all_trainer_main.jpg" alt="" />
        <div className="centered">TRAINERS</div>
      </div>

      <div className="trainers-div">

        {alldata.map(data => (
          <div className="trainer-item" onClick={() => trainerDescriptionFn(data._id)}>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src="" style={{backgroundImage: "url('../images/profile.png')", width: "100%", height: "15rem", backgroundSize: 'cover', overflow: 'hidden'}}/>
              <Card.Body>
                <Card.Title>{data.user_id.email}</Card.Title>
                <Card.Text>
                  {data.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}

      </div>
    </>
  );
}