import React from "react"
import "./BusinessRegistration.css";
import background from '../others/background.png'


class BusinessRegistration extends React.Component{
    render() {
        return (
          <div>
            <div class="bg">
              <img src={background} alt="" />
            </div>
            <div className="overlay">Register Business Here!</div>
          </div>
           
        );
    
    }
 
}
export default BusinessRegistration