import React from "react"
import { Link } from 'react-router-dom';
import { Search } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";

import Container from 'react-bootstrap/Container';
import logo from '../others/logo.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UserFeed from "./UserFeed";

import './NavPanel.css';

class NavPanel extends React.Component{
  render() {
    return (
    <Navbar collapseOnSelect expand="lg">
        <Container>
              <Link to="/"><Navbar.Brand href="#home"><img src={logo} alt="Mistark" /></Navbar.Brand></Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav id="buttons">
                  <div>
                    <Search id="Search"/>
                    <input id="searchNav" type="search" class="form-control" placeholder="Search"/>
                  </div>
                  <Link to="/userfeed" component={UserFeed} id="Home">Home</Link>
                  <Link id="About">About</Link> 
                  <Link id="Help">Weeeeeeeeelp</Link> 
                   <PersonCircle id="Person"/>
                   <span id="user">User</span>
                </Nav>
              </Navbar.Collapse>
          </Container>
    </Navbar>
    );
  }
}
export default NavPanel


