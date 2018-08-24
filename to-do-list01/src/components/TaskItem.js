import React, { Component } from 'react';

class TaskItem extends Component {
  render() {
    let { task, index } = this.props;
    return (
      <tr>
        <td className="align-middle">{ index + 1 }</td>
        <td className="align-middle">{ task.name }</td>
        <td className="text-center align-middle">
          <span className={ task.status === true ? 'bg-success text-white p-2 rounded' : 'bg-danger text-white p-2 rounded' }>
            { task.status === true ? 'Kích hoạt' : 'Chưa kích hoạt' }
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-info w-25">
            <span className="fa fa-pencil mr-2" />Sửa
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger w-25 ml-2">
            <span className="fa fa-trash mr-2" />Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
