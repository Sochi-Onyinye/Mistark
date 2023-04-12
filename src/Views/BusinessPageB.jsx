import React from "react"
import "./BusinessPageB.css";
import NavPanelB from "./NavPanelB";
import ReviewPage from "./ReviewPage";
import { Link } from 'react-router-dom';
import RecordPageView from "../App.js"
import { PencilFill } from "react-bootstrap-icons";

class BusinessPageB extends React.Component{
  render() {
    RecordPageView()
    return (
      <div>
        <NavPanelB/>
        <div id="specBusiness">
          {/*all the pictures*/}
          <div className="row" id="businessimgs">
            <div className="col-7"><img src="" alt="bigger picture" /></div>
            <div className="col-5">
              <div className="row" id="smallerpics"><img src="" alt="one small picture" /></div>
              <div className="row" id="twosmallerpics">
                <div className="col-6"><img src="" alt="dividedpic1" /></div>
                <div className="col-6"><img src="" alt="dividedpic2" /></div>
              </div>
            </div>
          </div>

          {/*reviews and contact card*/}
          <div className="row" id="revcon">
            <div className="col-6">
              <div className="card" id="reviewCard">
                <h3 id="nameHeading">Business Name</h3>
                <h4 id="currentReviews">Current Reviews</h4>
                <h4 id="numReviews">106 reviews</h4> {/*insert the number of reviews this business has here*/}
                <p id="custReview">reviews from past customers</p> {/*populate this with written reviews from customers*/}
                <div className="col-7" id="emptycol"></div>
                <div className="col-4" id="reviewcol">
                  <Link to="/reviewpage" component={ReviewPage} ><button id="leave-review" type="button" size="sm" class="btn btn-success"> Leave a Review </button></Link>
                </div>
                
              </div>
            </div>
            <div className="col-6">
              <div className="row card" id="emptyrow"></div>
              <div className="row card" id="contactCard">
                <h3 id="businesslocal">Location</h3>
                <h4 id="hours"> Operating Hours</h4>
              </div>
            </div>
          </div>
        </div>
        <Link to="/businesspageb" component={BusinessPageB} ><button type="button" class="btn btn-success btn-sm" id="changePage">Edit View<PencilFill id= "editview"/></button></Link>
        {/* This edit button should let the business owner change text eg contact info or upload different images*/}
      </div>
       
    );
  }
}
export default BusinessPageB