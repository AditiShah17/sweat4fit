import React,{useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
// import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'

export default function Trainers(props) {


  const[text,settext]=useState("Inderpreet");
  useEffect(()=>
    {
      console.log("%%%%%%%%%%%%%");
        axios.get('/api/trainers').then(function(response)
             {
                console.log("########",response.data);
                console.log("checking");
                settext(response.data[0].description);

            })
    });





  return (
    <>
      <div className="heroimage-div">
        <img src="../images/covers/all_trainer_main.jpg" alt="" />
        <div className="centered">TRAINERS</div>
      </div>

      <div className="trainers-div">

        
        <div className="trainer-item">
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="../images/trainers/1.jpg" />
            <Card.Body>
              <Card.Title>{text}</Card.Title>
              <Card.Text>
                Some quick example text to build on the Trainer Name and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        {/* <div className="trainer-item">
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="../images/trainers/1.jpg" />
            <Card.Body>
              <Card.Title>Trainer Name</Card.Title>
              <Card.Text>
                Some quick example text to build on the Trainer Name and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="trainer-item">
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="../images/trainers/1.jpg" />
            <Card.Body>
              <Card.Title>Trainer Name</Card.Title>
              <Card.Text>
                Some quick example text to build on the Trainer Name and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="trainer-item">
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="../images/trainers/1.jpg" />
            <Card.Body>
              <Card.Title>Trainer Name</Card.Title>
              <Card.Text>
                Some quick example text to build on the Trainer Name and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="trainer-item">
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="../images/trainers/1.jpg" />
            <Card.Body>
              <Card.Title>Trainer Name</Card.Title>
              <Card.Text>
                Some quick example text to build on the Trainer Name and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="trainer-item">
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="../images/trainers/1.jpg" />
            <Card.Body>
              <Card.Title>Trainer Name</Card.Title>
              <Card.Text>
                Some quick example text to build on the Trainer Name and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="trainer-item">
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="../images/trainers/1.jpg" />
            <Card.Body>
              <Card.Title>Trainer Name</Card.Title>
              <Card.Text>
                Some quick example text to build on the Trainer Name and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="trainer-item">
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="../images/trainers/1.jpg" />
            <Card.Body>
              <Card.Title>Trainer Name</Card.Title>
              <Card.Text>
                Some quick example text to build on the Trainer Name and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div> */}
      </div>
    </>
  );
}
