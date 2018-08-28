import React, { Component } from 'react';

class TaskItem extends Component {

  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id)
  }

  onDelete = () => {
    this.props.onDelete(this.props.task.id)
  }
  render() {
    let { task, index } = this.props;
    return (
      <tr>
        <td className="align-middle">{ index + 1 }</td>
        <td className="align-middle">{ task.name }</td>
        <td className="text-center align-middle">
          <span
            className={ task.status === true ? 'bg-success text-white p-2 rounded' : 'bg-danger text-white p-2 rounded' } onClick={ this.onUpdateStatus }
          >
            { task.status === true ? 'Active' : 'Not active' }
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-info w-25">
            <span className="fa fa-pencil mr-2" /> Edit
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger w-25 ml-2"
            onClick={ this.onDelete }
          >
            <span className="fa fa-trash mr-2" /> Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
