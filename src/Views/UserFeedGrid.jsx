import React from 'react'
import './UserFeedGrid.css'
import RecordPageView from "../App.js"

function UserFeedGrid(props) {
    RecordPageView()        
    return (
      <div class="gridbody">
        <div class="container card-columns">
        <div class="row">
            {props.children}
        </div>
      </div>
      </div>
    );
  }
export default UserFeedGrid