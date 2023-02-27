import React from "react"
import './Header.css'


class Header extends React.Component{
  render() {
    return (
      <div class="mask header">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3">Discover a Business</h1>
        </div>
        
        <div className="mistark__header-search">
        <button type="button" class="btn btn-light">Find the nearest business</button>
      </div>

      </div>
    </div>
    );
  }
}
export default Header