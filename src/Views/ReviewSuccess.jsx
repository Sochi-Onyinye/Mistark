import React from "react";
import NavPanel from "./NavPanel";
import "./ReviewSuccess.css";
import RecordPageView from "../App.js";

class ReviewSuccess extends React.Component{
    render() {
      RecordPageView()
      return (
        <div>
            <NavPanel/>
            <h3 id="success">Review was a success</h3>
        </div>

        );
    }
  }
  export default ReviewSuccess