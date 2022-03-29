import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Trainers from "./Components/Trainers";
import Schedule from "./Components/Schedule";
import ContactUs from "./Components/ContactUs";

import Checking from "./Components/Checking";

import "./css/navbar.css";
import "./css/footer.css";
import "./css/home.css";
import "./css/about.css";
import "./css/trainers.css";
import "./css/schedule.css";
import "./css/contactus.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/trainers">
            <Trainers />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/checking">
            <Checking />
          </Route>
          <Route path="/">
            <Home />
          </Route>
         
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
