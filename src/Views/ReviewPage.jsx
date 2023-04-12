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
        <div className="row" id="reviewing">
          <div className="col-4" id="img1"><img src="" alt="business cover pic" /></div>
          <div className="offset-md-3 col-6" >
            <div className="card" id="businessHeader"> 
              <h6 id="busname">Business Name</h6>
              <h6 id="totalrev">Total reviews : 106 reviews</h6>
              <h6 id="goStars"><StarFill id="stars"/><StarFill id="stars"/><StarFill id="stars"/><StarFill id="stars"/><StarFill id="stars"/></h6>
              <h6 id="totalstar">5.0</h6>
            </div>  
          </div>
        </div>

         {/*row2 - rating*/}
        <div className="row">
          <div className="col-12 card" id="ratingCard">
            <h6 id="value">Value for money <StarFill className="topStar1"/><StarFill className="Rate"/><StarFill className="Rate"/><StarFill className="Rate"/><StarFill className="Rate"/></h6>
            <h6 id="quality">Quality Service <StarFill className="topStar2"/><StarFill className="Rate"/><StarFill className="Rate"/><StarFill className="Rate"/><StarFill className="Rate"/></h6>
            <h6 id="loc">Location <StarFill className="topStar3"/><StarFill className="Rate"/><StarFill className="Rate"/><StarFill className="Rate"/><StarFill className="Rate"/></h6>
          </div>
        </div>

        <div className="row">
          <div className="col-12" id="writtenReview">
            <label for="exampleFormControlTextarea1" id="textHead">Any more comments: </label>
            <input type="text"  className="form-control" id="revText"/>
            <Link to="/reviewsuccess" component={ReviewSuccess} ><button type="button" class="btn btn-success btn-md" id="review">Submit </button></Link>
          </div>

        </div>
      </div>
    );
  }
}
export default ReviewPage

