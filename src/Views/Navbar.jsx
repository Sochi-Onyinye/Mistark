import React from "react"
import './Navbar.css';

class Navbar extends React.Component{
  render() {
    return (
      <div class="navbar">
        <a href="#" role="button" id="logo">
          <img src="./src/others/logo.png" alt="Mistark" />
        </a>
        <button type="button" class="btn btn-success btn-sm">Login</button>
        <button type="button" class="btn btn-success btn-sm">Register</button>
      </div>
    );
  }
}
export default Navbar