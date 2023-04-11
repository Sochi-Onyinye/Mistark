import React from "react";
import NavPanel from "./NavPanel";
import './AboutPage.css'   
import RecordPageView from "../App.js"



class AboutPage extends React.Component{
    render() {
      RecordPageView()
      return (
        <div>
            <NavPanel/>
            <h3 id="about">About Us</h3>
            <p id="story">Our product is a web app that matches prospective customers to existing minority-owned businesses. This product addresses two types of users: members of the public seeking businesses and business owners looking to be found. Users are able to find businesses via multiple methods, including proximity to the user's current location, text keywords eg colleges, product images, voice search, and recommendations based on search history or behavior.
            </p>
        </div>

        );
    }
  }
  export default AboutPage