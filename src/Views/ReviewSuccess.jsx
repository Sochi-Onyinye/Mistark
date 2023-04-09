import React from "react";
import NavPanel from "./NavPanel";
import "./ReviewSuccess.css";

class ReviewSuccess extends React.Component{
    render() {
      return (
        <div>
            <NavPanel/>
            <h3 id="success">Review was a success</h3>
        </div>

        );
    }
  }
  export default ReviewSuccess