import React from "react";
import Blur from 'react-blur';
import "./UserLogin.css";
import background from '../others/background.png'


class UserLogin extends React.Component{
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
export default UserLogin