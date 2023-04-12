import React from "react";
import "./BusinessRegistration.css";
import background from '../others/background.png'
import { Link } from 'react-router-dom';
import { PencilFill } from "react-bootstrap-icons";
import { XSquareFill } from "react-bootstrap-icons";


import LandingPage from "./LandingPage";
import UnderReview from "./UnderReview";
import RecordPageView from "../App.js";

class BusinessRegistration extends React.Component{
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
              <div className="card regCard">
                <div className="p-5 d-flex flex-column align-items-center w-100">
                  <Link to="/" component={LandingPage} id="close"><XSquareFill/></Link>
                  <h5>Business Registration</h5>

                    <input className='form-control sr-only' id='businessname' placeholder="Business name" type='text'/>

                    <div className="row">
                      <input className='form-control sr-only' id='businessfirstname' placeholder="Firstname" type='text'/>
                      <input className='form-control sr-only' id='businesslastname'  placeholder="Lastname"  type='text'/>
                    </div>
                    
                    <input className='form-control sr-only' id='businessemail' placeholder="Email" type='email'/>

                    <div className="row">
                      <input className='form-control sr-only col-5' id='businessein' placeholder="EIN" type='text'/>
                      <input className='form-control sr-only col-7' id='businessphone'  placeholder="(000)-000-0000"  type='tel'/>
                    </div>

                    <input className='form-control sr-only col-10' id='businesspassword'  placeholder="Password"  type='password'/>

                    <p id="passwordpolicy">Passwords must have at least 10 characters and contain at least two of the following: uppercase letters, lowercase letters, numbers, and symbols.</p>
                

                  <Link to="/underreview" component={UnderReview} ><button type="button" class="btn btn-success btn-sm" id="signinOne">Register  <PencilFill id="loginicon"/></button></Link>
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
export default BusinessRegistration