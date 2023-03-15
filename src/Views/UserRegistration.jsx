import React from "react";
import "./UserRegistration.css";
import background from '../others/background.png'


class UserRegistration extends React.Component{
  render() {
    return (
      <div>
        <div class="bg">
          <img src={background} alt="" />
        </div>
        <div className="overlay">Text</div>
      </div>
       
    );
  }
}
export default UserRegistration