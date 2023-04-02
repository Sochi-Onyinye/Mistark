import React from "react"
import "./EmailConfirmation.css";
import background from '../others/background.png'
import { Link } from 'react-router-dom';
import { XSquareFill } from "react-bootstrap-icons";
import {  SendFill } from "react-bootstrap-icons";
import { PencilFill } from "react-bootstrap-icons";

import LandingPage from "./LandingPage";
import RegistrationSuccess from "./RegistrationSuccess";


class EmailConfirmation extends React.Component{
  render() {
    return (
      <div>
        <div class="bg">
          <img src={background} alt="" />
        </div>
        <div className="overlay container form-group needs-validation">
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className= "col-12">
              <div className="card loginCard">
                <div className="p-5 d-flex flex-column align-items-center w-100">
                  <Link to="/" component={LandingPage} id="close"><XSquareFill/></Link>
                  <h5>Enter your verification code<SendFill id="loginicon"/></h5>
                  <p>A one time Overification pin has been sent to....this email.... Please enter the code that you received to verify your email.</p>

                  <input className='form-control sr-only' id='verificationpin' placeholder="OTP" type='number'/>

                  <Link to="/registrationsuccess" component={RegistrationSuccess} ><button type="button" class="btn btn-success btn-sm" id="signinOne">Send  <PencilFill id="loginicon"/></button></Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
    );
  }
}
export default EmailConfirmation
