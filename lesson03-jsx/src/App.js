import React, { Component } from 'react';

class App extends Component {

  showInfoProduct(product) {
    if (product.status) {
      return  <div className="text-center">
                <p>ID: { product.id }</p>
                <p>Name: { product.name }</p>
                <p>Price: { product.price }</p>
                <p>Status: { product.status ? 'Active' : 'Pending...' }</p>
              </div>
    }
  }

  render() {
    let product = {
      id: 1,
      name: 'Iphone X',
      price: 1500000,
      status: true
    }

    let users = [
      {
        id: 1,
        name: 'Nguyen Van A',
        age: 10
      },
      {
        id: 2,
        name: 'Nguyen Van B',
        age: 15
      },
      {
        id: 3,
        name: 'Nguyen Van C',
        age: 20
      },
      {
        id: 4,
        name: 'Nguyen Van D',
        age: 40
      },
    ];

    let elements = users.map((user, index) => {
      return  <div key={index}>
                <h2>ID: { user.id }</h2>
                <h2>Name: { user.name }</h2>
                <h2>Age: { user.age }</h2>
              </div>
    });
    return (
      <div>
          <div className="container mt-5">
            <h3 className="text-center">Product Information</h3>
            { this.showInfoProduct(product) }
            { elements }
          </div>
      </div>
    );
  }
}

export default App;
