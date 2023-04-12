import React from "react"
import "./BusinessLogin.css";
import background from '../others/background.png'
import { Link } from 'react-router-dom';
import {  ArrowRightSquareFill } from "react-bootstrap-icons";
import { XSquareFill } from "react-bootstrap-icons";

import LandingPage from "./LandingPage";
import BusinessAnalytics from "./BusinessAnalytics";
import RecordPageView from "../App.js"
import BusinessPageB from "./BusinessPageB";



export default function BusinessLoginView(props) {
  const {handleChange, onSubmit} = props;
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
                  <h5>Login as a Business?</h5>

                  <input className='form-control sr-only' placeholder="Email" type='email' name='email' onChange={handleChange}/>
                  <input className='form-control sr-only'  placeholder="Password"  type='password' name='password' onChange={handleChange}/>

                <button type="button" class="btn btn-success btn-sm" id="signinOne" onClick={onSubmit}>Login  <ArrowRightSquareFill id="loginicon"/></button>

                  <Link to="/businesspageb" component={BusinessPageB} id="underline"><p id="signinToo">Sign in as a customer?</p></Link>
                  <p id="forgot">Forgot Password? | Click <a href="reset password" id="underline">here</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
    );
    }