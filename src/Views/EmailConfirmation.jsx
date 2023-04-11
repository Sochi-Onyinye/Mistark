import React from "react"
import "./EmailConfirmation.css";
import background from '../others/background.png'
import { Link } from 'react-router-dom';
import { XSquareFill } from "react-bootstrap-icons";
import {  SendFill } from "react-bootstrap-icons";
import { PencilFill } from "react-bootstrap-icons";

import LandingPage from "./LandingPage";
import RegistrationSuccess from "./RegistrationSuccess";
import RecordPageView from "../App.js"


class EmailConfirmation extends React.Component{
  render() {
    RecordPageView()
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
                  <p>A one time verification pin has been sent to....this email.... Please enter the code that you received to verify your email.</p>

                  <input className='form-control sr-only' id='verificationpin' name = "OTP" placeholder="OTP" type='text'/>
                  <h6 id="invalid">Invalid OTP. Kindly re-enter pin ... </h6>
                  <Link to="/registrationsuccess" component={RegistrationSuccess} ><button type="button" class="btn btn-success btn-sm" id="signinOne">Verify  <PencilFill id="loginicon"/></button></Link>
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
