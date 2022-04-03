import React from "react";
// import Tabs from "react-bootstrap/Tabs";
// import Tab from "react-bootstrap/Tab";
import {
  Tabs,
  Tab,
  Modal,
  Row,
  Button,
  Col,
  Form,
  Card,
  Container,
  Nav,
} from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'

export default function Schedule(props) {
 

  return (
    <>
      <div className="heroimage-div">
        <img src="../images/covers/schedule_main.jpeg" alt="" />
        <div class="centered">SCHEDULE</div>
      </div>

      <div className="schedule-div">
        <Tab.Container id="left-tabs-example" defaultActiveKey="monday">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="6248d908713b62f7cd3b1f6f">MONDAY</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="6248d908713b62f7cd3b1f70">TUESDAY</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="6248d908713b62f7cd3b1f71">WEDNESDAY</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="6248d908713b62f7cd3b1f72">THURSDAY</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="6248d908713b62f7cd3b1f73">FRIDAY</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="6248d908713b62f7cd3b1f74">SATURDAY</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="6248d908713b62f7cd3b1f75">SUNDAY</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col className="schedule-content" sm={9}>
              <div className="schedule-content-div">
                <Tab.Content>
                  <Tab.Pane eventKey="monday">
                    <div className="schedule-items">
                      <Card>
                        <Card.Header as="h5">Trainer Name</Card.Header>
                        <Card.Body>
                          <Card.Text>12:00PM - 03:00PM</Card.Text>
                          
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="schedule-items">
                      <Card>
                        <Card.Header as="h5">Trainer Name</Card.Header>
                        <Card.Body>
                          <Card.Text>12:00PM - 03:00PM</Card.Text>
                          
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tuesday">
                    <div className="schedule-items">
                      <Card>
                        <Card.Header as="h5">Trainer Name</Card.Header>
                        <Card.Body>
                          <Card.Text>12:00PM - 03:00PM</Card.Text>
                          
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="schedule-items">
                      <Card>
                        <Card.Header as="h5">Trainer Name</Card.Header>
                        <Card.Body>
                          <Card.Text>12:00PM - 03:00PM</Card.Text>
                          
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="schedule-items">
                      <Card>
                        <Card.Header as="h5">Trainer Name</Card.Header>
                        <Card.Body>
                          <Card.Text>12:00PM - 03:00PM</Card.Text>
                          
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="wednesday">
                    <div className="schedule-items">
                      <Card>
                        <Card.Header as="h5">Trainer Name</Card.Header>
                        <Card.Body>
                          <Card.Text>12:00PM - 03:00PM</Card.Text>
                          
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="schedule-items">
                      <Card>
                        <Card.Header as="h5">Trainer Name</Card.Header>
                        <Card.Body>
                          <Card.Text>12:00PM - 03:00PM</Card.Text>
                          
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="schedule-items">
                      <Card>
                        <Card.Header as="h5">Trainer Name</Card.Header>
                        <Card.Body>
                          <Card.Text>12:00PM - 03:00PM</Card.Text>
                          
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="thursday">
                    <div className="schedule-items">
                      <Card>
                        <Card.Header as="h5">Trainer Name</Card.Header>
                        <Card.Body>
                          <Card.Text>12:00PM - 03:00PM</Card.Text>
                          
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="schedule-items">
                      <Card>
                        <Card.Header as="h5">Trainer Name</Card.Header>
                        <Card.Body>
                          <Card.Text>12:00PM - 03:00PM</Card.Text>
                          
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="schedule-items">
                      <Card>
                        <Card.Header as="h5">Trainer Name</Card.Header>
                        <Card.Body>
                          <Card.Text>12:00PM - 03:00PM</Card.Text>
                          
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="friday">
                    <div className="schedule-items">
                      <Card>
                        <Card.Header as="h5">Trainer Name</Card.Header>
                        <Card.Body>
                          <Card.Text>12:00PM - 03:00PM</Card.Text>
                          
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="schedule-items">
                      <Card>
                        <Card.Header as="h5">Trainer Name</Card.Header>
                        <Card.Body>
                          <Card.Text>12:00PM - 03:00PM</Card.Text>
                          
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="schedule-items">
                      <Card>
                        <Card.Header as="h5">Trainer Name</Card.Header>
                        <Card.Body>
                          <Card.Text>12:00PM - 03:00PM</Card.Text>
                          
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="saturday">
                    <div className="schedule-items">
                      <Card>
                        <Card.Header as="h5">Trainer Name</Card.Header>
                        <Card.Body>
                          <Card.Text>12:00PM - 03:00PM</Card.Text>
                          
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="schedule-items">
                      <Card>
                        <Card.Header as="h5">Trainer Name</Card.Header>
                        <Card.Body>
                          <Card.Text>12:00PM - 03:00PM</Card.Text>
                          
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="schedule-items">
                      <Card>
                        <Card.Header as="h5">Trainer Name</Card.Header>
                        <Card.Body>
                          <Card.Text>12:00PM - 03:00PM</Card.Text>
                          
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sunday">
                    <div className="schedule-items">
                      <Card>
                        <Card.Header as="h5">Trainer Name</Card.Header>
                        <Card.Body>
                          <Card.Text>12:00PM - 03:00PM</Card.Text>
                          
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="schedule-items">
                      <Card>
                        <Card.Header as="h5">Trainer Name</Card.Header>
                        <Card.Body>
                          <Card.Text>12:00PM - 03:00PM</Card.Text>
                          
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>

                    <div className="schedule-items">
                      <Card>
                        <Card.Header as="h5">Trainer Name</Card.Header>
                        <Card.Body>
                          <Card.Text>12:00PM - 03:00PM</Card.Text>
                          
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}
