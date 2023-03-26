import React, { Component } from 'react';
import Card from './Card';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/getproduct')
      .then((response) => response.json())
      .then((item) => {
        this.setState(() => {
          return { products: item };
        });
      });
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Donato</h1>
        <div className='container'>
          <div className='row'>
            {this.state.products.map((product) => {
              return (
                <div className='col-md-4 col-12 mx-auto my-2'>
                  <Card key={product.id} product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
