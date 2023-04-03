import React from 'react'
import './UserFeedGrid.css'

function UserFeedGrid(props) {
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