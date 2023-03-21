import React from "react"
import "./EmailConfirmation.css";
import background from '../others/background.png'
import { Link } from 'react-router-dom';
import { XSquareFill } from "react-bootstrap-icons";
import {  SendFill } from "react-bootstrap-icons";

import LandingPage from "./LandingPage";


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
                  <h5>Email Confirmation <SendFill id="loginicon"/></h5>
                  <p>Email has been successfully sent to ...insert email here..</p>
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
