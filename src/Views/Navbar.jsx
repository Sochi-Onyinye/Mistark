import React from "react"
import { Link } from 'react-router-dom';
import { PencilFill } from "react-bootstrap-icons";
import {  ArrowRightSquareFill } from "react-bootstrap-icons";

import Container from 'react-bootstrap/Container';
import logo from '../others/logo.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import UserLogin from "./UserLoginView";
import RegistrationPage from "./RegistrationPage";

import './Navbar.css';

class NavBar extends React.Component{
  render() {
    return (
    <Navbar collapseOnSelect expand="lg">
        <Container>
              <Link to="/"><Navbar.Brand href="#home"><img src={logo} alt="Mistark" /></Navbar.Brand></Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav id="buttons">
                      <Link to="/login" component={UserLogin}><button type="button" class="btn btn-success btn-sm" id="login">Login  <ArrowRightSquareFill id="loginicon"/> </button></Link>
                      <Link to="/registration" component={RegistrationPage}><button type="button" class="btn btn-success btn-sm" id="register">Register  <PencilFill id="registericon"/></button></Link>
                    </Nav>
              </Navbar.Collapse>
          </Container>
    </Navbar>
    );
  }
}
export default NavBar


