import React from "react";
import NavPanel from "./NavPanel";
import './HelpPage.css' 
import background from '../others/background.png'
import { Link } from 'react-router-dom';
import { XSquareFill } from "react-bootstrap-icons";
import LandingPage from "./LandingPage";
import RecordPageView from "../App.js"

class HelpPage extends React.Component{
    render() {
     RecordPageView()
      return (
        <div>
            <NavPanel/>
            <div class="bg">
                <img src={background} alt="" />
            </div>
            <div className="overlay container form-group needs-validation">
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className= "col-12">
                        <div className="card loginCard" id="helpcard">
                            <div className="p-5 d-flex flex-column align-items-center w-100">
                                <Link to="/" component={LandingPage} id="close"><XSquareFill/></Link>
                                <h5>Please Contact Us here:</h5>
                                <h6>IT support: +1-(202)-460-5504</h6>
                                <h6>Customer care: +1-(202)-515-0346 </h6>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        );
    }
  }
  export default HelpPage