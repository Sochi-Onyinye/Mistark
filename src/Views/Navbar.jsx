import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

class NavBar extends React.Component{
  render() {
    return (
    <Navbar collapseOnSelect expand="lg">
        <Container>
            <Navbar.Brand href="#home"><img src="./src/others/logo.png" alt="Mistark" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav id="buttons">
                    <button type="button" class="btn btn-success btn-sm" id="login">Login</button>
                    <button type="button" class="btn btn-success btn-sm" id="register">Register</button>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
  }
}
export default NavBar


