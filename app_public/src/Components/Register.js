import axios from 'axios';
import React,{useEffect} from 'react'

export default function Register() {

const getDetails = (event)=>
{
    event.preventDefault();      //page will not be reload once clicked.
    const fName = event.target.fName.value;
    const lName = event.target.lName.value;
    const email = event.target.email.value;
    const mobile = event.target.mobileno.value;
    const password = event.target.password.value;
    const gender = event.target.inlineRadioOptions.value;
    const role_id= event.target.role.value;
    
    axios.post('http://localhost:5000/api/register',{
        firstname: fName,
        lastname:lName,
        email:email,
        mobile_no:mobile,
        password:password,
        gender:gender,
        role_id:role_id
    }).then(res=> console.log('posting data',res)).catch(err=>console.log(err));


}

  return (
    <div className="container my-3">
    <form onSubmit={getDetails}>
    <div className="form-group">
      <label htmlFor="firstName">First Name:</label>
      <input type="text" className="form-control" name="fName"/>
    </div>
     <div className="form-group">
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" className="form-control" name="lName"/>
    </div>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input type="email" className="form-control" name="email"/>
    </div>
    <div className="form-group">
      <label htmlFor="mobileno">Mobile No:</label>
      <input type="number" className="form-control" name="mobileno" maxLength="10"/>
    </div>
    <div className="form-group">
      <label htmlFor="password">Password(Minimun 8 characters):</label>
      <input type="password" className="form-control" name="password" minLength="8"/>
    </div>


    <div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male"/>
    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
    </div>
    <div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female"/>
    <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
    </div>
    <div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Others"/>
    <label className="form-check-label" htmlFor="inlineRadio3">Others</label>
    </div>
    <div className="form-group">
      <label htmlFor="roleid">Role:</label>
      <select name="role">
        <option value="1">Trainee</option>
        <option value="2">Trainer</option>
        </select>
    </div>
    <button type="submit" className="btn btn-success">Submit</button>
  </form>
  </div>
  )
}
