import React from "react";
import "./AddService.css";
import background from '../others/background.png'
import { Link } from 'react-router-dom';
import {  ArrowRightSquareFill } from "react-bootstrap-icons";
import { XSquareFill } from "react-bootstrap-icons";

import LandingPage from "./LandingPage";
import RecordPageView from "../App.js"

export default function AddService(props) {
  const {onSubmit, handleChange, errorMessage} = props
  RecordPageView()
  return (
      <div>
        <div class="bg">
          <img src={background} alt="" />
        </div>
        <div className="overlay container form-group needs-validation">
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className= "col-12">
              <div className="card ServiceCard">
                <div className="p-5 d-flex flex-column align-items-center w-100">
                  <Link to="/" component={LandingPage} id="close"><XSquareFill/></Link>
                  <h5>Adding A New Service? </h5>

                  {errorMessage != null && <p>{errorMessage}</p>}

                  <input className='form-control sr-only' placeholder="Service Name" type='text' name="SerName" onChange={handleChange}/>
                  <input className='form-control sr-only' placeholder="Service Name" type='text' name="SerName" onChange={handleChange}/>
                  <button type="button" class="btn btn-success btn-sm" id="AddSer" onClick={onSubmit}>Add Service  <ArrowRightSquareFill id="Serviceicon" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
