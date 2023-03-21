import React from "react"
import Header from "./Header.jsx"
import "./LandingPage.css";
import LandingPageGrid from "./LandingPageGrid.jsx";

export default function LandingPage(props) {
    return (
      <div>
        <Header/>
        <LandingPageGrid>
        {props.categories}
        </LandingPageGrid>
      </div>
       
    );
}
