import React from "react"
import "./RegistrationPage.css";
import background from '../others/background.png'
import { Link } from 'react-router-dom';
import { XSquareFill } from "react-bootstrap-icons";

import UserLogin from "./UserLogin";
import LandingPage from "./LandingPage";

class RegistrationSuccess extends React.Component{
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
                  <h5>Registration Successful!</h5>
                  <p id = "registerlinks"><Link to="/login" component={UserLogin} id="underline" >Login</Link> to continue </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
    );
  }
}
export default RegistrationSuccess