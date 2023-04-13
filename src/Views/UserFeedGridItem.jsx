import React from 'react'
import RecordPageView from "../App.js"

export default function UserFeedGridItem(props) {
const {businessName, onClick, profileImage} = props
RecordPageView()

return (
    <div className="card bg-success" id="userfeedcard" onClick={onClick}>
        {/* Everything you need to do for the user feed grid should be done within this div*/ }
        <div class="card-body">
            <h5 class="card-title" id="card-title"></h5>
            <div className='row'>
                <img src={profileImage} alt="" id="userfeedimg" className='col-4'/>
                <h5 className="card-subtitle mb-2 col-8" id="card-subtitle">{businessName}</h5>
            </div>
        </div>  
        {/* end of div*/ }
    </div> 
    )
}


