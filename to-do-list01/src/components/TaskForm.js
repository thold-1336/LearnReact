import React, { Component } from 'react';

class TaskForm extends Component {

  render() {
    return (
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <h4 className="m-0">Thêm Công Việc</h4>
          <button
            type="button"
            className="close"
            onClick={ this.props.onCloseForm }
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Tên :</label>
              <input type="text" className="form-control" />
            </div>
            <label>Trạng Thái :</label>
            <select className="form-control" required="required">
              <option value={1}>Kích Hoạt</option>
              <option value={0}>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-info w-25 ">
                <span className="fa fa-plus mr-2"></span>
                Thêm
              </button>
              <button type="submit" className="btn btn-danger w-25 ml-3">
                <span className="fa fa-close mr-2"></span>
                Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
