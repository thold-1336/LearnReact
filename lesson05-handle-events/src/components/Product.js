import React, { Component } from 'react';
class App extends Component {
  onBuyNow = () => {
    alert( 'Name: ' + this.props.name + '\nPrice: ' + this.props.price )
  }
  render() {
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src="https://via.placeholder.com/350x250" alt="" />
          <div className="card-body text-center">
            <h5 className="card-title">{ this.props.name }</h5>
            <p>{ this.props.price }</p>
            <a className="btn btn-primary w-100" data-toggle="modal" data-target="#exampleModal" onClick={ this.onBuyNow }>Buy now!</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
