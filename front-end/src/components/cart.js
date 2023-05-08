import React, { Component } from 'react'
import './cart.style.scss'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    }
  }

  componentDidMount() {
    //API calls
    const url="https://cse445.vercel.app";
    // const url = "http://localhost:5000";
    fetch(`${url}/api/cart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "jwt-token": localStorage.getItem('token')
      },
    })
      .then((response) => response.json())
      .then((item) => {
        this.setState(() => {
          return { products: item };
        });
      });
  }
  // navigate=useNavigate();
  buyCart = async (e) => {
    e.preventDefault();
    //API calls
    const url="https://cse445.vercel.app";
    // const url = "http://localhost:5000";
    const response = await fetch(`${url}/api/buyall`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "jwt-token": localStorage.getItem('token')
      }
    })
    const json = await response.json();
    if(json){
      alert('Succesfully checkout')
    }else{
      alert('Error While doing Checkout')
    }
  }
  render() {
    // console.log(this.state.products)

    return (
      <div className="cart">
        <div className="wrap">
          <header className="cart-header cf">
            <strong>Items in Your Cart</strong>
          </header>
          <div className="cart-table">
            <ul>
              {this.state.products.map((product) => {
                return (
                  <li className="item">
                    <div className="item-main cf">
                      <div className="item-block ib-info cf">
                        <img className="product-img" src={product.imageUrl} alt='' />
                        <div className="ib-info-meta">
                          <h3>{product.name}</h3>
                          <span className="title">{product.description}</span>
                        </div>
                      </div>
                    </div>
                    <div className="item-foot cf">
                      <div className="if-left"><span className="if-status">In Stock</span></div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="cart-footer cf">
            <span className="butom" onClick={this.buyCart}>Checkout</span>
            <span className="cont-shopping"><i className="i-angle-left"></i>Continue Shopping</span>
          </div>
        </div>
      </div>
    )
  }
}

