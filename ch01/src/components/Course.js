import React, { Component } from 'react';
import Lesson from './Lesson';

class Course extends Component {
	showButtonFree() {
		const isFree = this.props.free;
		if (isFree === true) {
			return <div className="card-footer">
	            	<button type="button" className="btn btn-warning">View more</button>
	          	</div>;
		}
	}

	render() {
		return (
      <div className="col-3">
        <div className="card">
          <div className="card-header bg-info">
            {this.props.name}
          </div>
          <p className="pl-3">{this.props.time}</p>
          <p className="pl-3">{this.props.children}</p>
          <ul className="list-group list-group-flush m-3 border">
						<Lesson/>
          </ul>
          { this.showButtonFree() }
        </div>
      </div>
		)
	}
}

export default Course;