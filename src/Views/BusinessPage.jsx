import React from "react"
import "./BusinessPage.css";
import NavPanel from "./NavPanel";
import ReviewPage from "./ReviewPage";
import { Link } from 'react-router-dom';
import RecordPageView from "../App.js"
import ServiceGrid from "./ServiceGrid";


function BusinessPage(props) {
    console.log(props)
    const {business, reviews, serviceCards} = props

    RecordPageView()
    return (
      <div>
        <NavPanel/>
        <div id="specBusiness">
          {/*all the pictures*/}
          <div className="row" id="businessimgs">
            <div className="col-7"><img src={business?business.businessImages[0]:''}alt="bigger picture" id="biggerpics"/></div>
            <div className="col-5">
              <div className="row" id="smallerpics"><img src={business?business.businessImages[1]:''} alt="one small picture" id='smallpic' /></div>
              <div className="row" id="twosmallerpics">
                <div className="col-6"><img src={business?business.businessImages[2]:''} alt="dividedpic1" id="twosmallerpicsone" /></div>
                <div className="col-6"><img src={business?business.businessImages[3]:''} alt="dividedpic2" id="twosmallerpicstwo"/></div>
              </div>
            </div>
          </div>

          {/*reviews and contact card*/}
          <div className="row" id="revcon">
            <ServiceGrid> {serviceCards} </ServiceGrid>
            <div className="col-6">
              <div className="row card" id="contactCard">
                <h3 id="businesslocal">{business?business.address:''}</h3>
                <h4 id="hours"> Operating Hours</h4>
                <h4 id="time"> Mon - Fri: 8:00am - 8:00pm</h4>
                <h4 id="contactBuss"> Contact Nick : nickphotos@gmail.com</h4>
              </div>
              <div className="row card" id="reviewCard">
                <h3 id="nameHeading">{business?business.name:''}</h3>
                <h4 id="currentReviews">{reviews?reviews[0]?.content:null}</h4>
                <h4 id="numReview">{reviews?reviews.size: 0} reviews </h4> {/*insert the number of reviews this business has here*/}
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
export default BusinessPage