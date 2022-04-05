import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";


// import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'

export default function ResetPassword(props) {

    const resetpasswordapi = 'http://localhost:5000/api/reset-password';
    const token = sessionStorage.getItem('userData');

    const resetpassword = (event) => {

        var body = {
            old_password: event.target.currentpassword.value,
            new_password: event.target.newpassword.value,
            confirm_new_password: event.target.confirmpassword.value
        }

        event.preventDefault();

        axios({
            method: 'put',
            url: resetpasswordapi,
            data: body,
            headers: { "Authorization": `Bearer ${token}` }
        }).then(res => {

            console.log("data=", res.data);
            alert("Password Changed Successfully");

        }).catch((err) => {
            alert("Password Does not match");
            document.getElementById("resetpassword-form").reset();
        });
    }



    return (
        <>
        <p className="resetpassword-heading">Reset Password</p>
            <div className="restepassword-div">
                
                <div className="resetpassword-form-div">
                    <form id="resetpassword-form" onSubmit={resetpassword} className="resetpassword-form">
                        <label for="newPassword">Current Password : </label>
                        <input type="password" id="newPassword" name="currentpassword" title="New password" required /><br /><br />

                        <label for="newPassword">New Password : </label>
                        <input type="password" id="newPassword" name="newpassword" title="new password" required /><br /><br />

                        <label for="confirmPassword">Confirm Password : </label>
                        <input type="password" id="confirmPassword" name="confirmpassword" title="Confirm new password" required /><br /><br />

                        <input type="submit" className="update-btn" value="Change Password" />
                    </form>
                </div>

            </div>
        </>
    );
}
