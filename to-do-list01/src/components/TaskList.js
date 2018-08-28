import React, { Component } from 'react';
import TaskItem from './TaskItem';
class TaskList extends Component {

  render() {
    let { tasks } = this.props;
    let elementTask = tasks.map( (item, index) => {
      return <TaskItem
              key={ item.id }
              index={index}
              task={item}
              onUpdateStatus={ this.props.onUpdateStatus }
              onDelete={ this.props.onDelete }
              >
            </TaskItem>
    } )
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Name</th>
            <th className="text-center">Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td>
              <input type="text" className="form-control" />
            </td>
            <td>
              <select className="form-control">
                <option value={-1}>Show all</option>
                <option value={0}>Not active</option>
                <option value={1}>Active</option>
              </select>
            </td>
            <td />
          </tr>
          { elementTask }
        </tbody>
      </table>
    );
  }
}

export default TaskList;
