import React from "react"
import "./UserFeed.css";
import NavPanel from "./NavPanel";
import UserFeedGrid from "./UserFeedGrid";


export default function UserFeed(props)  {
  const {businessname} = props;
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

          <UserFeedGrid>
            {props.categories}
          </UserFeedGrid>

        </div> 
      </div>
       
    );
}

