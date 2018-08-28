import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import demo from './trainnning/demo'
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

  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    })
  }


  onSubmit = (data) => {
    let { tasks } = this.state;
    data.id = this.randomID();
    tasks.push(data);
    this.setState({
      tasks: tasks
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onUpdateStatus = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    if ( index !== -1 ) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });

      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
  onDelete = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    console.log(index)
    if ( index !== -1 ) {
      tasks.splice(index, 1);

      this.setState({
        tasks: tasks
      });

      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    this.onToggleForm()
  }

  findIndex = (id) => {
    let { tasks } = this.state;
    let result = -1;
    tasks.forEach( (task, index) => {
      if (task.id === id) {
        result = index;
      }
      return result;
    })
  }
  render() {
    let { tasks, isDisplayForm } = this.state;
    let elementForm = isDisplayForm
    ? <TaskForm onSubmit={ this.onSubmit } onCloseForm={ this.onToggleForm }></TaskForm> : null;
    return (
      <div>
        <div className="container-fluid">
          <div className="text-center mt-5">
            <h1>Todo List</h1>
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
                <span className="fa fa-plus mr-2" /> Add Task
              </button>
              <Control></Control>
              <div className="row mt-15">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                  <TaskList
                    tasks={tasks}
                    onUpdateStatus={ this.onUpdateStatus }
                    onDelete={ this.onDelete }
                  >
                  </TaskList>
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
