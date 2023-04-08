import React from "react"
import "./ReviewPage.css";
import NavPanel from "./NavPanel";
<script src="js/addons/rating.js"></script>

class ReviewPage extends React.Component{
  render() {
    return (
      <div>
        <NavPanel/>
        {/*row1 - image and business overall rating*/}
        <div className="row" id="reviewimg">
          <div className="col-4" id="img1"><img src="" alt="business cover pic" /></div>
          <div className="col-8" >
            <div className="card" id="businessHeader"> 
              <h3 id="busname">Business Name</h3>
              <h3 id="totalrev">Total reviews</h3>
            </div>  
          </div>
        </div>
         {/*row2 - rating*/}
        <div className="row" id="ratings"> 
          <div className="col-12">
            <div className="card" id="ratingCard">
              <h3 id="value">Value for money</h3>
              <div class="container">
                <span id="rateMe4"  class="feedback"></span>
              </div>
              <h3 id="quality">Quality Service </h3>
              <h3 id="loc">Location</h3>
            </div>
          </div>
        </div>
        
         {/*row3 - written review*/}
        <div className="row" id="writtenReview">
          <div className="card"> </div>
        </div>
      </div>
       
    );
  }
}
export default ReviewPage