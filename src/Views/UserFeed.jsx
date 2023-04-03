import React from "react"
import "./UserFeed.css";
import NavPanel from "./NavPanel";

class UserFeed extends React.Component {
  render() {
    return (
      <div>
        <NavPanel/>
        <div className="row">
          <div className="col-3">
            <div class="card-body" id="FilterPane"><br></br>
              <h5 class="card-title" id="filterhead">Filter</h5>
              <h5 class="card-subtitle mb-2" id="filtervalue">Filter values</h5>
              <p class="card-text" id="morefiltervalue">More Filter Values</p><br></br>
              </div>  
          </div>

          <div class="col-9 card bg-success">
            {/* Everything you need to do for the user feed grid should be done within this div*/ }
            <div class="card-body">
              <h5 class="card-title" id="card-title">Business name</h5>
              <h5 class="card-subtitle mb-2" id="card-subtitle">Business Description</h5>
              <p class="card-text">More Info</p>
            </div>  
            {/* end of div*/ }
          </div>

        </div> 
      </div>
       
    );
  }
}
export default UserFeed
