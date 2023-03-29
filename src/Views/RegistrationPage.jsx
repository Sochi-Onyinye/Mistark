import React from "react"
import "./RegistrationPage.css";
import background from '../others/background.png'
import { Link } from 'react-router-dom';
import { XSquareFill } from "react-bootstrap-icons";

import BusinessRegistration from "./BusinessRegistration";
import UserRegistration from "./UserRegistrationView";
import LandingPage from "./LandingPage";

class RegistrationPage extends React.Component{
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
                  <h5>Registering as a customer?</h5>
 
                  <p id = "registerlinks">Click <Link to="/userregistration" component={UserRegistration} id="underline" >here</Link> to continue  |
                  Register <Link to="/businessRegistration" component={BusinessRegistration} id="underline">here</Link> as a business? </p>
                  
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
    );
  }
}
export default RegistrationPage