import React from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import "./UserFeed.css";
import NavPanel from "./NavPanel";
import UserFeedGrid from "./UserFeedGrid";
import RecordPageView from "../App.js"


export default function UserFeed(props)  {
  const {businessname} = props;
  console.log(businessname)
  RecordPageView()
    return (
      <div>
        <NavPanel/>
        <div className="row">
          <div className="col-3">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="filterParent"> Filter </Dropdown.Toggle>
                <Dropdown.Menu class="card-body" id="FilterPane">  
                  <div>
                    <h6>Food</h6>
                    <h6>Photography</h6>
                    <h6>Fashion</h6>
                    <h6>Music</h6>
                  </div>
                  <div className="dropdown-item">
                    <input type="checkbox" name="Location" class="card-subtitle mb-2" id="filtervalue"/> 
                    <label for="Location">Near Me</label>
                  </div>
                  <div className="dropdown-item">
                    <input type="checkbox" name="Recommended" class="card-subtitle mb-2" id="filtervalue"/> 
                    <label for="Recommended">Recommended</label>
                  </div>
                  <div className="dropdown-item">
                    <input type="checkbox" name="Favorites" class="card-subtitle mb-2" id="filtervalue"/> 
                    <label for="Favorites">Favorites</label>
                  </div>
                </Dropdown.Menu>
            </Dropdown>
          </div>

          <UserFeedGrid>
            {props.categories}
          </UserFeedGrid>

        </div> 
      </div>
       
    );
}

