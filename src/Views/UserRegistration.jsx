import React from "react";
import "./UserRegistration.css";
import background from '../others/background.png'
import { Link } from 'react-router-dom';
import { PencilFill } from "react-bootstrap-icons";
import { XSquareFill } from "react-bootstrap-icons";


import LandingPage from "./LandingPage";
import OnBehalf from "./OnBehalf"
import EmailConfirmation from "./EmailConfirmation";


class UserLogin extends React.Component{
  render() {
    return (
      <div>
        <div class="bg">
          <img src={background} alt="" />
        </div>
        <div className="overlay container form-group needs-validation">
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className= "col-12">
              <div className="card regCard">
                <div className="p-5 d-flex flex-column align-items-center w-100">
                  <Link to="/" component={LandingPage} id="close"><XSquareFill/></Link>
                  <h5>Customer Registration</h5>

                      <input className='form-control sr-only' id='firstname' placeholder="Firstname" type='text'/>
                      <input className='form-control sr-only' id='lastname'  placeholder="Lastname"  type='text'/>

                    <input className='form-control sr-only' id='email' placeholder="Email" type='email'/>

                    <div className="row datel">
                      <input className='form-control sr-only col-5' id='date' placeholder="DOB (mm/dd/yyyy)" type='date'/>
                      <input className='form-control sr-only col-7' id='phone'  placeholder="(000)-000-0000"  type='tel'/>
                    </div>

                    <input className='form-control sr-only col-10' id='password'  placeholder="Password"  type='password'/>

                    <p id="passwordpolicy">Passwords must have at least 10 characters and contain at least two of the following: uppercase letters, lowercase letters, numbers, and symbols.</p>
                

                  <Link to="/emailconfirmation" component={EmailConfirmation} ><button type="button" class="btn btn-success btn-sm" id="signinOne">Register  <PencilFill id="loginicon"/></button></Link>
                  <p>Register <Link to="/onbehalf" component={OnBehalf} id="underline">here</Link> on behalf of your favorite business</p>
                  <p>By clicking “Register”,  you agree to MiStark Terms & Condition and Privacy Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
    );
  }
}
export default UserLogin
