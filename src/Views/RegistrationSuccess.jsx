import React from "react"
import "./RegistrationSuccess.css";
import background from '../others/background.png'
import { Link } from 'react-router-dom';
import { XSquareFill } from "react-bootstrap-icons";

import UserLoginView from "./UserLoginView";
import LandingPage from "./LandingPage";

export default function RegistrationSuccess() {
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
                  <h5>Your email has been confirmed successfully!</h5>
                  <p>Click <Link to="/login" component={UserLoginView} id="underline">here</Link> to continue to login page</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
    );
}