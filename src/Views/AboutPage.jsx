import React from "react";
import NavPanel from "./NavPanel";
import './AboutPage.css' 


class AboutPage extends React.Component{
    render() {
      return (
        <div>
            <NavPanel/>
            <h3 id="about">About Us</h3>
        </div>

        );
    }
  }
  export default AboutPage