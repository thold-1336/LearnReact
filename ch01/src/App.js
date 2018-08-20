import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Course from './components/Course'

class App extends Component {
  render() {
    return (
      <div className="row my-5">
        <Course name="ReactJS"JS time="30h" free={true}>ReactJS Simple</Course>
        <Course name="Angular 4" time="55h" free={false}/>
        <Course name="NodeJS" time="35h" free={true}/>
      </div>
    );
  }
}

export default App;
