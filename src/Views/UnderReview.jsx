import React from "react"
import "./UnderReview.css";
import background from '../others/background.png'
import { Link } from 'react-router-dom';
import { XSquareFill } from "react-bootstrap-icons";

import LandingPage from "./LandingPage";
import RecordPageView from "../App.js"


class UnderReview extends React.Component{
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
              <div className="card loginCard">
                <div className="p-5 d-flex flex-column align-items-center w-100">
                  <Link to="/" component={LandingPage} id="close"><XSquareFill/></Link>
                  <h5>Your business is currently under review</h5>
                  <p>Please check your email for more details</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
    );
  }
}
export default UnderReview