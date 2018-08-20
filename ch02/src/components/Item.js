import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    this.props.onClickDelete(id);
  }

  render() {
    const item = this.props.item;
    const index = this.props.index;

    return (
      <tr>
        <td className="text-center">{ index + 1 }</td>
        <td>{ item.name }</td>
        <td className="text-center">
          { this.showLevel(item.level) }
        </td>
        <td>
          <button type="button" className="btn btn-warning">Edit</button>
          <button type="button" className="btn btn-danger" onClick={ () => this.handleDelete(item.id) }>Delete</button>
        </td>
      </tr>
    );
  }

  showLevel(level) {
    let elementLevel = <span className="label label-default">Small</span>;
    if (level === 1) {
      elementLevel = <span className="label label-info">Medium</span>;
    } else if (level === 2) {
      elementLevel = <span className="label label-danger">High</span>;
    }

    return elementLevel;
  }
}

export default Item;
