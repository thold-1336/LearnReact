import React, { Component } from 'react';
import Lesson from './Lesson';

class Course extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isShowOutline: false,
			totalStudent: 69
		};

		this.handleClick3 = this.handleClick3.bind(this);
		this.registerCourse = this.registerCourse.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleClick1() {
		alert("handleClick1");
	}

	handleClick2(content) {
		alert(content)
	}

	handleClick3() {
		alert(this.props.name);
	}

	handleToggle() {
		this.setState({
			isShowOutline: !this.state.isShowOutline
		});
	}

	registerCourse() {
		console.log(this.refs.username.value);
	}

	showButtonFree() {
		const isFree = this.props.free;
		if (isFree === true) {
			return <div className="card-footer">
								<div className="btn-group">
	            		<button onClick={this.handleClick1} type="button" className="btn btn-warning">View more</button>
	            		<button onClick={() => this.handleClick2('View 2123')} type="button" className="btn btn-danger">View more2</button>
	            		<button onClick={this.handleClick3} type="button" className="btn btn-info">View more3</button>
	            	</div>
	          	</div>;
		}
		else {
			return (
				<div className="card-footer">
	        <div className="form-group d-flex mx-3 my-0">
	          <label htmlFor="inputText" className="sr-only">Password</label>
	          <input type="text" className="form-control" id="inputText" placeholder="User name..." ref="username"/>
	          <button type="button" className="btn btn-info" onClick={this.registerCourse}>Register!</button>
	        </div>  
	      </div>
			)
		}
	}

	render() {
		let elemOutline = null;
		if (this.state.isShowOutline) {
			elemOutline = <ul className="list-group list-group-flush m-3 border">
											<Lesson/>
					          </ul>
		}

		return (
      <div className="col-4">
        <div className="card">
          <div className="card-header bg-info">
            {this.props.name}
          </div>
          <div className="card-content px-3">
	          <p className="pl-3">{this.props.time}</p>
	          <p className="pl-3">{this.props.children}</p>
	          <p>
							<button type="button" className="btn btn-success" onClick={this.handleToggle}>Toggle Outline</button>
	          </p>
          </div>
					{ elemOutline }
          { this.showButtonFree() }
        </div>
      </div>
		)
	}
}

export default Course;