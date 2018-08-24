import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      txtName: '',
      txtPassword: '',
      txtDescription: '',
      selectGender: 0,
      rdLanguage: 'en',
      chkStatus: false
    }

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleChange(event) {
    let target = event.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  onHandleSubmit(event) {
    event.preventDefault();
    console.clear();
    console.log("Username: " + this.state.txtName)
    console.log("Password: " + this.state.txtPassword)
    console.log("Description: " + this.state.txtDescription)
    console.log("Gender: " + this.state.selectGender)
    console.log("Laguage: " + this.state.rdLanguage)
    console.log("Laguage: " + this.state.chkStatus)
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-8 offset-2 mt-5">
              <div className="card">
                <div className="card-header text-center">
                  <h3>Form</h3>
                </div>
                <div className="card-body">
                  <form action="true" onSubmit={ this.onHandleSubmit }>
                    <div className="form-group">
                      <label htmlFor="username" className="font-weight-bold">Username: </label>
                      <input
                        type="text"
                        name="txtName"
                        placeholder="Enter username"
                        id="username"
                        className="form-control"
                        onChange={ this.onHandleChange }
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" className="font-weight-bold">Password: </label>
                      <input
                        type="password"
                        name="txtPassword"
                        placeholder="Enter password"
                        id="password"
                        className="form-control"
                        onChange={ this.onHandleChange }
                      />
                    </div>
                    <div className="form-group">
                      <label className="font-weight-bold">Description: </label>
                      <textarea
                        className="form-control"
                        name="txtDescription"
                        placeholder="Enter description"
                        rows="3"
                        onChange={ this.onHandleChange }
                      />
                    </div>

                    <div className="form-group">
                      <label className="font-weight-bold">Select Gender</label>
                      <select
                        className="form-control"
                        name="selectGender"
                        value={ this.state.selectGender }
                        onChange={ this.onHandleChange }
                      >
                        <option value={0}>Female</option>
                        <option value={1}>Male</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="font-weight-bold">Select Language</label>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio" name="rdLanguage"
                          id="exampleRadios1"
                          value="en"
                          onChange={ this.onHandleChange }
                          checked={this.state.rdLanguage === "en"}
                        />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                          English
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="rdLanguage"
                          id="exampleRadios2"
                          value="vi"
                          onChange={ this.onHandleChange }
                          checked={this.state.rdLanguage === "vi"}
                        />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                          Vietnam
                        </label>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="font-weight-bold">Select Language</label>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="defaultCheck1"
                          name="chkStatus"
                          value={ true }
                          onChange={ this.onHandleChange }
                          checked={ this.state.chkStatus === true }
                        />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                          Status
                        </label>
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary w-25">Save</button>
                      <button type="reset" className="btn btn-danger w-25 ml-3">Clear</button>
                    </div>
                  </form>
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
