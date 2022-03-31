import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
// import { Carousel } from "react-bootstrap";
// import Carousel from 'react-bootstrap/Carousel'

export default function ResetPassword(props) {
    return (
        <>
        <p className="resetpassword-heading">Reset Password</p>
            <div className="restepassword-div">
                
                <div className="resetpassword-form-div">
                    <form className="resetpassword-form">
                        <label for="newPassword">Current Password : </label>
                        <input type="password" id="newPassword" name="newPassword" title="New password" required /><br /><br />

                        <label for="newPassword">New Password : </label>
                        <input type="password" id="newPassword" name="newPassword" title="new password" required /><br /><br />

                        <label for="confirmPassword">Confirm Password : </label>
                        <input type="password" id="confirmPassword" name="confirmPassword" title="Confirm new password" required /><br /><br />

                        <input type="submit" className="update-btn" value="Change Password" />
                    </form>
                </div>

            </div>
        </>
    );
}
