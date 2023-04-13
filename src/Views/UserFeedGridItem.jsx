import React from 'react'
import RecordPageView from "../App.js"

export default function UserFeedGridItem(props) {
const {businessName, onClick, profileImage} = props
RecordPageView()

return (
    <div class="col-9 card bg-success" id="userfeedcard" onClick={onClick}>
        {/* Everything you need to do for the user feed grid should be done within this div*/ }
        <div class="card-body">
            <h5 class="card-title" id="card-title"></h5>
            <img src={profileImage} alt="" />
            <h5 class="card-subtitle mb-2" id="card-subtitle">{businessName}</h5>
        </div>  
        {/* end of div*/ }
    </div> )
}


