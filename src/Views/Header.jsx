import React from "react"
import { GeoAltFill } from "react-bootstrap-icons";
import './Header.css' 


class Header extends React.Component{
  render() {
    return (
      <div class="banner">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3">Discover a Business...</h1>
          <div class="input-group">
            <div class="form-outline d-flex">
              <input type="search" class="form-control" placeholder="Find the nearest business..."/>
              <button id="search-button" type="button" class="btn btn-success"> <GeoAltFill/>  Search </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default Header