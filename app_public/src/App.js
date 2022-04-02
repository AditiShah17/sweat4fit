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
import ScrollToTop from "./Components/ScrollToTop";

import UserProfile from "./Components/UserProfile";
import EditProfile from "./Components/EditProfile";
import ResetPassword from "./Components/ResetPassword";
import AddTrainerDocuments from "./Components/AddTrainerDocuments";
import EditTrainerAvailability from "./Components/EditTrainerAvailability";
import TrainerDetails from "./Components/TrainerDetails";

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
import "./css/editprofile.css";
import "./css/resetpassword.css";
import "./css/addtrainerdocuments.css";
import "./css/edittraineravailability.css";
import "./css/trainerdetails.css";




import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
      <ScrollToTop />
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
            </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route path="/userprofile">
            <UserProfile />
          </Route>
          
          <Route path="/editprofile">
            <EditProfile />
          </Route>
          <Route path="/resetpassword">
            <ResetPassword />
          </Route>
          <Route path="/addtrainerdocuments">
            <AddTrainerDocuments />
          </Route>
          <Route path="/edittraineravailability">
            <EditTrainerAvailability />
          </Route>
          <Route path="/trainerdetails">
            <TrainerDetails />
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
