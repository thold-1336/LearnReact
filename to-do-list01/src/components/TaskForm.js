import React, { Component } from 'react';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: false
    }
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if (name === 'status') {
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name] : value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.onClear();
    this.props.onCloseForm();
  }

  onClear = () => {
    this.setState({
      name: '',
      status: false
    })
  }
  render() {
    return (
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <h4 className="m-0">Add Task</h4>
          <button
            type="button"
            className="close"
            onClick={ this.props.onCloseForm }
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="card-body">
          <form onSubmit={ this.onSubmit }>
            <div className="form-group">
              <label>Task name :</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter task name"
                name="name"
                value={ this.state.name }
                onChange={ this.onChange }
              />
            </div>
            <label>Status :</label>
            <select
              className="form-control"
              required="required"
              name="status"
              value={ this.state.status }
              onChange={ this.onChange }
            >
              <option value={true}>Active</option>
              <option value={false}>Not active</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-info w-25 ">
                <span className="fa fa-plus mr-2"></span>
                Add
              </button>
              <button
              type="submit"
              className="btn btn-danger w-25 ml-3"
              onClick={ this.onClear }
              >
                <span className="fa fa-close mr-2"></span>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
