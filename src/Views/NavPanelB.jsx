import React from "react"
import { Link } from 'react-router-dom';
import { Search } from "react-bootstrap-icons";

import Container from 'react-bootstrap/Container';
import logo from '../others/logo.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BusinessPageB from "./BusinessPageB";

import './NavPanelB.css';
import AboutPage from "./AboutPage";
import HelpPage from "./HelpPage";
import RecordPageView from "../App.js"
import Dropdown from 'react-bootstrap/Dropdown';

class NavPanelB extends React.Component{
  render() {
    RecordPageView()
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
                  <Link to="/businesspageb" component={BusinessPageB} id="Home">Home</Link>
                  <Link to="/aboutpage" component={AboutPage} id="About">About</Link> 
                  <Link to="/helppage" component={HelpPage} id="Help">Help</Link> 
                   <div>
                    <div className="row">
                      <div className="col-3">
                        <Dropdown>
                          <Dropdown.Toggle variant="success" id=" ProfileParent"> Business Profile </Dropdown.Toggle>
                            <Dropdown.Menu class="card-body" id="ProfilePane">  
                              
                              <div className="dropdown-item">
                                <input type="checkbox" name="Settings" class="card-subtitle mb-2" id="Profilevalue"/> 
                                <label for="Settings">Settings</label>
                              </div>
                              <div className="dropdown-item">
                                <input type="checkbox" name="Edit" class="card-subtitle mb-2" id="Profilevalue"/> 
                                <label for="Edit">Edit Business Profile</label>
                              </div>
                            </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </Nav>
              </Navbar.Collapse>
          </Container>
    </Navbar>
    );
  }
}
export default NavPanelB


