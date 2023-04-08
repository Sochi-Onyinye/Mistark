import React from "react"
import "./BusinessPage.css";
import NavPanel from "./NavPanel";
import ReviewPage from "./ReviewPage";
import { Link } from 'react-router-dom';


class BusinessPage extends React.Component{
  render() {
    return (
      <div>
        <NavPanel/>
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
      </div>
       
    );
  }
}
export default BusinessPage