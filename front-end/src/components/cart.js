import React, { Component } from 'react'
import Card from './Card'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      products: [],
    }
  }

  componentDidMount(){
    //API calls
    // const url="https://cloudnote-af56.onrender.com";
    const url="http://localhost:5000";
    fetch(`${url}/api/cart`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "jwt-token": localStorage.getItem('token')
        },
    })
    .then((response)=> response.json())
    .then((item)=>{
      this.setState(()=>{
        return {products : item};
      });
    });
}
render() {
    //   console.log(this.state.products)
    // console.log(this.state.products.productId)
    // console.log(this.state.totalproducts._id)
    // const filterProduct=this.state.totalproducts.filter((product)=>{
    //     return product._id.includes(this.state.products.productId);
    //   })
    //   console.log(filterProduct)
    
    return (
      <div className='container'>
        <h1 className='text-center'>Cart</h1>
        <div className="container">
          <div className="row">
          {this.state.products.map((product)=>{
            // console.log(product.productId)
            return (
              <div className="col-md-4 col-12 mx-auto my-2">
                  <Card key={product.id} product={product}/>
              </div>
            )
          })}
          </div>
        </div>
      </div>
    )
  }
}

