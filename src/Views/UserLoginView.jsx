import React from "react";
import "./UserLoginView.css";
import background from '../others/background.png'
import { Link } from 'react-router-dom';
import {  ArrowRightSquareFill } from "react-bootstrap-icons";
import { XSquareFill } from "react-bootstrap-icons";
import UserFeed from "./UserFeed";
import LandingPage from "./LandingPage";

export default function UserLoginView(props) {
  const {onSubmit, handleChange} = props
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
                  <h5>Login as a customer?</h5>

                  <input className='form-control sr-only' placeholder="Email" type='email' name="email" onChange={handleChange}/>
                  <input className='form-control sr-only'  placeholder="Password"  type='password' name="password" onChange={handleChange}/>
                  <button type="button" class="btn btn-success btn-sm" id="signinOne">Login  <ArrowRightSquareFill id="loginicon" onClick={onSubmit}/></button>

                  <Link to="/businesslogin" component={UserFeed} id="underline"><p id="signinToo">Sign in as business?</p></Link>
                  <p id="forgot">Forgot Password? | Click <a href="reset password" id="underline">here</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
