import React from "react"
import Header from "./Header.jsx"
import NavBar from './NavBar.jsx';
import "./LandingPage.css";
import LandingPageGrid from "./LandingPageGrid.jsx";

export default function LandingPage(props) {
    return (
      <div>
        <NavBar/>
        <Header/>
        <LandingPageGrid>
        {props.categories}
        </LandingPageGrid>
      </div>
       
    );
}
