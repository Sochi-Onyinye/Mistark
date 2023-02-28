import React from 'react'
import './Grid.css'

class Grid extends React.Component{
  render() {
    return (
      <div className="card-columns">
        <div className="card bg-info">
          <div className="card-body text-center">
            <p className="card-text">Fashion & Modeling</p>
          </div>
          </div>
        <div className="card bg-warning">
          <div className="card-body text-center">
            <p className="card-text">Media & Photography</p>
          </div>
        </div>
        <div className="card bg-primary">
          <div className="card-body text-center">
            <p className="card-text">Food Catering</p>
          </div>
        </div>
        <div className="card bg-warning">
          <div className="card-body text-center">
            <p className="card-text">Freelance Writing</p>
          </div>
        </div>
        <div className="card bg-primary">
          <div className="card-body text-center">
            <p className="card-text">Software & Web Developments</p>
          </div>
        </div>
        <div className="card bg-info">
          <div className="card-body text-center">
            <p className="card-text">Music Production</p>
          </div>
        </div>
        <div className="card bg-primary">
          <div className="card-body text-center">
            <p className="card-text">Arts & Crafts</p>
          </div>
        </div>
        <div className="card bg-info">
          <div className="card-body text-center">
            <p className="card-text">Social Media Publicity</p>
          </div>
        </div>
        <div className="card bg-warning">
          <div className="card-body text-center">
            <p className="card-text">Events Promotions</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Grid