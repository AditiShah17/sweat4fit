import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

// import Carousel from 'react-bootstrap/Carousel'

export default function Home(props) {
  return (
    <>
      {/* carousel */}
      <div className="carousel-div">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/covers/cover1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/covers/cover2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/covers/cover3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* home description */}
      <div className="home-description-div">
        <div className="home-description_description">
          <h3>All About</h3>
          <h2>
            <b>
              <span style={{ color: "#FF5656" }}>YOUR</span> FITNESS
            </b>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exerc esse cillum dolore Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et999
          </p>
        </div>
        <div className="home-description_video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/LGBxJqT_CUI"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>

      {/* testimonial */}
      <div className="testimonial-div">
        <h2 style={{ color: "#FF5656" }}>Our Happy Clients</h2>
        <Carousel>
          <Carousel.Item>
            <div className="testimonial-item">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <img
                style={{ width: "5rem" }}
                src="../images/testimonial/1.png"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exerc esse cillum dolore
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <img
                style={{ width: "2rem" }}
                src="../images/testimonial/quotes.png"
                alt=""
              />{" "}
              <br />
              <br />
              <p>
                <b>Client Name</b>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="testimonial-item">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <img
                style={{ width: "5rem" }}
                src="../images/testimonial/2.png"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exerc esse cillum dolore
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <img
                style={{ width: "2rem" }}
                src="../images/testimonial/quotes.png"
                alt=""
              />{" "}
              <br />
              <br />
              <p>
                <b>Client Name</b>
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="testimonial-item">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <img
                style={{ width: "5rem" }}
                src="../images/testimonial/3.png"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exerc esse cillum dolore
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <img
                style={{ width: "2rem" }}
                src="../images/testimonial/quotes.png"
                alt=""
              />{" "}
              <br />
              <br />
              <p>
                <b>Client Name</b>
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* expert trainers cards */}
      <div className="expert-trainers-div">
        <h2 style={{ color: "#FF5656" }}>Expert Trainers</h2>
        <Carousel>
          <Carousel.Item>
            <div className="expert-trainers-item">
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="../images/trainers/1.jpg" />
                  <Card.Body>
                    <Card.Title>Trainer Name</Card.Title>
                    <Card.Text>
                      Some Trainer Details
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>

              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="../images/trainers/1.jpg" />
                  <Card.Body>
                    <Card.Title>Trainer Name</Card.Title>
                    <Card.Text>
                      Some Trainer Details
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>

              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="../images/trainers/1.jpg" />
                  <Card.Body>
                    <Card.Title>Trainer Name</Card.Title>
                    <Card.Text>
                      Some Trainer Details
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="expert-trainers-item">
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="../images/trainers/1.jpg" />
                  <Card.Body>
                    <Card.Title>Trainer Name</Card.Title>
                    <Card.Text>
                      Some Trainer Details
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>

              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="../images/trainers/1.jpg" />
                  <Card.Body>
                    <Card.Title>Trainer Name</Card.Title>
                    <Card.Text>
                      Some Trainer Details
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>

              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="../images/trainers/1.jpg" />
                  <Card.Body>
                    <Card.Title>Trainer Name</Card.Title>
                    <Card.Text>
                      Some Trainer Details
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="expert-trainers-item">
              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="../images/trainers/1.jpg" />
                  <Card.Body>
                    <Card.Title>Trainer Name</Card.Title>
                    <Card.Text>
                      Some Trainer Details
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>

              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="../images/trainers/1.jpg" />
                  <Card.Body>
                    <Card.Title>Trainer Name</Card.Title>
                    <Card.Text>
                      Some Trainer Details
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>

              <div>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src="../images/trainers/1.jpg" />
                  <Card.Body>
                    <Card.Title>Trainer Name</Card.Title>
                    <Card.Text>
                      Some Trainer Details
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
