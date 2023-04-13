import React from "react"
import "./BusinessPage.css";
import NavPanelB from "./NavPanel";
import ReviewPage from "./ReviewPage";
import { Link } from 'react-router-dom';
import RecordPageView from "../App.js"


class BusinessPage extends React.Component {
  render() {
    const {businessInfo, reviewCards, serviceCards }= this.state
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
              <div className="row card" id="businessservice">
                  <button className="row card" id="eachcard">
                      <div className="col-3">
                        <img id="serviceimage"></img>
                      </div>
                      <div className="col-9">
                        <h6 className="row" id="servicename">Service Name</h6>
                        <p className="row" id="servicedesc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                  </button>

                  <button className="row card" id="eachcard">
                      <div className="col-3">
                        <img id="serviceimage"></img>
                      </div>
                      <div className="col-9">
                        <h6 className="row" id="servicename">Service Name</h6>
                        <p className="row" id="servicedesc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                  </button>

                  <button className="row card" id="eachcard">
                      <div className="col-3">
                        <img id="serviceimage"></img>
                      </div>
                      <div className="col-9">
                        <h6 className="row" id="servicename">Service Name</h6>
                        <p className="row" id="servicedesc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                  </button>
              
              </div>
            </div>

            <div className="col-6">
              <div className="row card" id="contactCard">
                <h3 id="businesslocal">Location</h3>
                <h4 id="hours"> Operating Hours</h4>
              </div>
              <div className="row card" id="reviewCard">
                <h3 id="nameHeading">Business Name</h3>
                <h4 id="currentReviews">Current Reviews</h4>
                <h4 id="numReview">106 reviews</h4> {/*insert the number of reviews this business has here*/}
                <p id="custReview">Reviews from past customers</p> {/*populate this with written reviews from customers*/}
                  <div className="col-7" id="emptycol"></div>
                  <div className="col-4" id="reviewcol">
                    <Link to="/reviewpage" component={ReviewPage} ><button id="leavereview" type="button" class="btn btn-success btn-sm"> Leave a Review </button></Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
       
    );
  }
}
export default BusinessPage