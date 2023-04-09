import React from "react"
import "./ReviewPage.css";
import NavPanel from "./NavPanel";
import { StarFill } from "react-bootstrap-icons";
import ReviewSuccess from "./ReviewSuccess";
import { Link } from 'react-router-dom';

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
          <div className="col-10">
            <div className="card" id="ratingCard">
              <h3 id="value">Value for money <StarFill className="topStar1"/><StarFill className="Rate"/><StarFill className="Rate"/><StarFill className="Rate"/><StarFill className="Rate"/></h3>
              <h3 id="quality">Quality Service <StarFill className="topStar2"/><StarFill className="Rate"/><StarFill className="Rate"/><StarFill className="Rate"/><StarFill className="Rate"/></h3>
              <h3 id="loc">Location <StarFill className="topStar3"/><StarFill className="Rate"/><StarFill className="Rate"/><StarFill className="Rate"/><StarFill className="Rate"/></h3>
            </div>
          </div>
        </div>
        
         {/*row3 - written review*/}
        <div className="row" id="writtenReview">
          <div className="col-12">
            <div className="card" id="writeRev">
              <div class="form-group">
                <label for="exampleFormControlTextarea1" id="textHead">Any more comments: </label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" cols="12"></textarea>
                <Link to="/reviewsuccess" component={ReviewSuccess} ><button type="button" class="btn btn-success btn-sm" id="review">Submit </button></Link>
              </div>
            </div> 
          </div>
        </div>
      </div>
       
    );
  }
}
export default ReviewPage