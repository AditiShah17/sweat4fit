import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Trainers from "./Components/Trainers";
import Schedule from "./Components/Schedule";
import ContactUs from "./Components/ContactUs";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import UserProfile from "./Components/UserProfile";

import Checking from "./Components/Checking";
import Register from "./Components/Register";

import "./css/navbar.css";
import "./css/footer.css";
import "./css/home.css";
import "./css/about.css";
import "./css/register.css";
import "./css/trainers.css";
import "./css/schedule.css";
import "./css/contactus.css";
import "./css/login.css";
import "./css/forgotpassword.css";
import "./css/userprofile.css";

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
          <Route path="/register">
            <Register/>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route path="/userprofile">
            <UserProfile />
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
