import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks : [],
      isDisplayForm: false
    }
  }

  randomID () {
    return Math.floor(( 1+Math.random() )  * 0x10000).toString(16).substring(1) + "-" +
    Math.floor(( 1+Math.random() )  * 0x10000).toString(16).substring(1) + "-" +
    Math.floor(( 1+Math.random() )  * 0x10000).toString(16).substring(1) + "-" +
    Math.floor(( 1+Math.random() )  * 0x10000).toString(16).substring(1);
  }

  componentWillMount() {
    if ( localStorage && localStorage.getItem('tasks') ) {
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      })
    }
  }

  onGenerateData = () => {
    let tasks = [
      {
        id : this.randomID(),
        name: 'Learn Develope React',
        status: true
      },
      {
        id : this.randomID(),
        name: 'Learn English',
        status: true
      },
      {
        id : this.randomID(),
        name: 'Reading Book',
        status: false
      }
    ]

    this.setState({
      tasks: tasks
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    })
  }
  render() {
    let { tasks, isDisplayForm } = this.state;
    let elementForm = isDisplayForm ? <TaskForm onCloseForm={ this.onToggleForm }></TaskForm> : null;
    return (
      <div>
        <div className="container-fluid">
          <div className="text-center mt-5">
            <h1>Quản Lý Công Việc</h1>
            <hr />
          </div>
          <div className="row">
            <div className={ isDisplayForm ? "col-3 col-sm-3 col-md-3 col-lg-3" : null }>
              { elementForm }
            </div>
            <div className={ isDisplayForm ? "col-9 col-sm-9 col-md-9 col-lg-9" : "col-12 col-sm-12 col-md-12 col-lg-12"}>
              <button
                type="button"
                className="btn btn-primary w-25"
                onClick={ this.onToggleForm }
              >
                <span className="fa fa-plus mr-2" />Thêm Công Việc
              </button>
              <button
                type="button"
                className="btn btn-danger ml-2 w-25"
                onClick={ this.onGenerateData }
              >
                Generate Data
              </button>
              <Control></Control>
              <div className="row mt-15">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <TaskList tasks={tasks}></TaskList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
