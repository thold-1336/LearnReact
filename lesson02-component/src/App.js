import React, { Component } from 'react';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <div className="container mt-5">
            <div className="row">
              <div className="col-3">
                <Product/>
              </div>
              <div className="col-3">
                <Product/>
              </div>
              <div className="col-3">
                <Product/>
              </div>
              <div className="col-3">
                <Product/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
