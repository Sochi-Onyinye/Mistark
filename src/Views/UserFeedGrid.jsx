import React from 'react'
import './UserFeedGrid.css'
import RecordPageView from "../App.js"

function UserFeedGrid(props) {
    RecordPageView()        
    return (
      <div class="gridbody">
        <div className="container card-columns row">
          <div className='col-1'></div>
          <div className="col-11">
              {props.children}
          </div>
      </div>
      </div>
    );
  }
export default UserFeedGrid