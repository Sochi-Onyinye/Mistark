import React from "react";
import "./UserRegistration.css";
import background from '../others/background.png'
import { Link } from 'react-router-dom';
import { PencilFill } from "react-bootstrap-icons";
import { XSquareFill } from "react-bootstrap-icons";
import RegistrationSuccess from "./RegistrationSuccess";
import LandingPage from "./LandingPage";
import OnBehalf from "./OnBehalf"
import RecordPageView from "../App.js"

export default function UserRegistrationView(props) {
  const {handleChange, onSubmit, errorMessage} = props
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
                  <h5>Customer Registration</h5>
                  {errorMessage != null && <p>{errorMessage}</p>}

                      <input className='form-control sr-only' id='firstname' placeholder="First Name" type='text' name='firstName' onChange={handleChange}/>
                      <input className='form-control sr-only' id='lastname'  placeholder="Last Name"  type='text' name='lastName' onChange={handleChange}/>

                    <input className='form-control sr-only' id='email' placeholder="Email" type='email' name='email' onChange={handleChange}/>

                    <div className="row datel">
                      <input className='form-control sr-only col-5' id='date' placeholder="DOB (mm/dd/yyyy)" type='date' name='dob' onChange={handleChange}/>
                      <input className='form-control sr-only col-7' id='phone'  placeholder="(000)-000-0000"  type='tel' name='phoneNumber' onChange={handleChange}/>
                    </div>

                    <input className='form-control sr-only col-10' id='password'  placeholder="Password"  type='password' name='password' onChange={handleChange}/>

                    <p id="passwordpolicy">Passwords must have at least 10 characters and contain the following: uppercase letters, lowercase letters, numbers, and symbols.</p>
                

                  <button type="button" class="btn btn-success btn-sm" id="signinOne" onClick={onSubmit}>Register  <PencilFill id="loginicon"/></button>
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