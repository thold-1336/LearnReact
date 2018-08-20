import React, { Component } from 'react';
import Product from './components/Product';
class App extends Component {
  constructor(props) {
    super(props);
    this.onAddProduct = this.onAddProduct.bind(this);
  }

  onAddToCart(text) {
    alert('Add to cart');
  };

  onAddProduct() {
    console.log(this.refs.name.value);
  }
  render() {
    return (
      <div>
        <h3 className="text-center my-5">React Product</h3>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card bg-light mb-5">
                  <div className="card-header">Add Product</div>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="exampleInputProduct">Product Name</label>
                      <input type="email" className="form-control" id="exampleInputProduct" placeholder="Enter product name" ref="name"/>
                    </div>
                    <div className="text-center">
                      <button type="button" className="btn btn-primary w-25 mx-auto" onClick={ this.onAddProduct }>Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                  <Product name='Iphone X' price="25.000.000"></Product>
              </div>
              <div className="col-4">
                  <Product name='Samsung Galaxy S9' price="20.000.000"></Product>
              </div>
              <div className="col-4">
                  <Product name='Oppo Find X' price="15.000.000"></Product>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
