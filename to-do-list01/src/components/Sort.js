import React, { Component } from 'react';

class Soft extends Component {
  render() {
    return (
      <div className="col-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle w-25" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            Sort
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li className="dropdown-item">
              <a role="button">
                <span className="fa fa-sort-alpha-asc mr-2"></span>
                Name ASC
              </a>
            </li>
            <li className="dropdown-item">
              <a role="button">
                <span className="fa fa-sort-alpha-desc mr-2"></span>
                Name DESC
              </a>
            </li>
            <li role="separator" className="dropdown-divider" />
            <li className="dropdown-item">
              <a role="button">Status Active</a>
            </li>
            <li className="dropdown-item">
              <a role="button">Status Not active</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Soft;
