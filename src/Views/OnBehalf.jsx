import React from "react";
import "./UserLogin.css";
import background from '../others/background.png'
import { Link } from 'react-router-dom';
import {  SendFill } from "react-bootstrap-icons";
import { XSquareFill } from "react-bootstrap-icons";

import LandingPage from "./LandingPage";
import RegistrationSuccess from "./RegistrationSuccess";

class OnBehalf extends React.Component{
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
                  <h6>Registering on behalf of a business?</h6>

                  <div id='inputId'> 
                    <input className='form-control sr-only' placeholder="Business Name" id="onbehalfbusinessname" type='text'/>
                    <input className='form-control sr-only'  placeholder="Business Email"  id="onbehalfbusinessemail" type='email'/>
                  </div><br></br>

                  <p>By clicking “Send Email”, you agree that the above field contains the business information. A registration email will be sent to business to complete registration.</p>

                  <Link to="/emailconfirmation" component={RegistrationSuccess} ><button type="button" class="btn btn-success btn-sm" id="signinOne">Send Email  <SendFill id="loginicon"/></button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
    );
  }
}
export default OnBehalf
