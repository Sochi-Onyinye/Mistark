import React from "react";
import NavPanel from "./NavPanel";
import './HelpPage.css' 

class HelpPage extends React.Component{
    render() {
      return (
        <div>
            <NavPanel/>
            <h3 id="help">Help page - team contact info *IT</h3>
        </div>

        );
    }
  }
  export default HelpPage