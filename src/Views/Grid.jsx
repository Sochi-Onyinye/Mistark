import React from 'react'
import './Grid.css'

class Grid extends React.Component{
  render() {
    return (
      <div class="gridbody">
        <h2>Favorites near you</h2>
        <div class="container card-columns">

          <div class="row one">
            <div class="col-3 card bg-success">
              <div class="card-body">
                <h5 class="card-title">Fashion & Modelling</h5>
                <h6 class="card-subtitle mb-2">Lorem Ipsum</h6>
                <p class="card-text">Details of this business category</p>
                <a href="#" class="card-link">link to business</a>
              </div>
            </div>

            <div class="col-3 card  bg-success">
              <div class="card-body">
                <h5 class="card-title">Media & Photography</h5>
                <h6 class="card-subtitle mb-2">Lorem Ipsum</h6>
                <p class="card-text">Details of this business category</p>
                <a href="#" class="card-link">link to business</a>
              </div>
            </div>

            <div class="col-3 card  bg-success">
              <div class="card-body">
                <h5 class="card-title">Food Catering</h5>
                <h6 class="card-subtitle mb-2">Lorem Ipsum</h6>
                <p class="card-text">Details of this business category</p>
                <a href="#" class="card-link">link to business</a>
              </div>
            </div>

            <div class="col-3 card  bg-success">
              <div class="card-body">
                <h5 class="card-title">Software & Web Development</h5>
                <h6 class="card-subtitle mb-2">Lorem Ipsum</h6>
                <p class="card-text">Details of this business category</p>
                <a href="#" class="card-link">link to business</a>
              </div>
          </div>


          <div class="row two">
            <div class="col-3 card  bg-success">
              <div class="card-body">
                <h5 class="card-title">Music Production</h5>
                <h6 class="card-subtitle mb-2">Lorem Ipsum</h6>
                <p class="card-text">Details of this business category</p>
                <a href="#" class="card-link">link to business</a>
              </div>
            </div>

            <div class="col-3 card  bg-success">
              <div class="card-body">
                <h5 class="card-title">Writing and Publications</h5>
                <h6 class="card-subtitle mb-2">Lorem Ipsum</h6>
                <p class="card-text">Details of this business category</p>
                <a href="#" class="card-link">link to business</a>
              </div>
            </div>

            <div class="col-3 card  bg-success">
              <div class="card-body">
                <h5 class="card-title">Arts & Crafts </h5>
                <h6 class="card-subtitle mb-2">Lorem Ipsum</h6>
                <p class="card-text">Details of this business category</p>
                <a href="#" class="card-link">link to business</a>
              </div>
            </div>

            <div class="col-3 card bg-success">
              <div class="card-body">
                <h5 class="card-title">Social Media Publicity</h5>
                <h6 class="card-subtitle mb-2">Lorem Ipsum</h6>
                <p class="card-text">Details of this business category</p>
                <a href="#" class="card-link">link to business</a>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
    );
  }
}
export default Grid

