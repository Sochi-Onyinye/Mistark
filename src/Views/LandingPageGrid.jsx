import React from 'react'
import './CategoryGrid.css'

function LandingPageGrid(props) {
    return (
      <div class="gridbody">
        <h2>Recommended Businesses...</h2>
        <div class="container card-columns">
        <div class="row">
              {props.children}
        </div>
      </div>
      </div>
    );
  }
export default LandingPageGrid

