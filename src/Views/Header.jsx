import React from "react"
import './Header.css'


class Header extends React.Component{
  render() {
    return (
      <div class="mask header">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3">Discover a Business</h1>
          <h4 class="mb-3">Subheading</h4>
          <a class="btn btn-outline-light btn-lg" href="#!" role="button"
          >Call to action</a
          >
        </div>
      </div>
    </div>
    );
  }
}
export default Header