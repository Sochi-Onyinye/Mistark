import React from "react"
import Form from 'react-bootstrap/Form';
import './Header.css'


class Header extends React.Component{
  render() {
    return (
      <div class="banner">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3">Discover a Business</h1>
          <Form className="d-flex">
          <icon iconName="location" color="white" size={40} className="align-top"/>
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
          </Form>
          
        </div>
      </div>
    </div>
    );
  }
}
export default Header