import React from "react"
import "./BusinessLogin.css";
import background from '../others/background.png'
import { Link } from 'react-router-dom';
import {  ArrowRightSquareFill } from "react-bootstrap-icons";
import { XSquareFill } from "react-bootstrap-icons";

import LandingPage from "./LandingPage";
import BusinessAnalytics from "./BusinessAnalytics";


class BusinessLogin extends React.Component{
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
                  <h5>Login as a Business?</h5>

                  <input className='form-control sr-only' placeholder="Email" type='email'/>
                  <input className='form-control sr-only'  placeholder="Password"  type='password'/>

                  <Link to="/businessanalytics" component={BusinessAnalytics} ><button type="button" class="btn btn-success btn-sm" id="signinOne">Login  <ArrowRightSquareFill id="loginicon"/></button></Link>

                  <Link to="/login" component={BusinessAnalytics} id="underline"><p id="signinToo">Sign in as a customer?</p></Link>
                  <p id="forgot">Forgot Password? | Click <a href="reset password" id="underline">here</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
    );
  }
}
export default BusinessLogin