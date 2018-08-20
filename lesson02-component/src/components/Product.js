import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="text-center">
          <img src="https://via.placeholder.com/300x250" alt="" className="img-thumbnail"/>
          <p className="text-center mt-3">Lorem ipsum</p>
          <button type="button" className="btn btn-primary mx-auto w-75">Buy</button>
      </div>
    );
  }
}

export default Product;
