import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate=useNavigate();
  const {product} = props;

  const myFunction = async (e) =>{
    e.preventDefault();
    if(localStorage.getItem('token')){
      //API calls
      // const url="https://cloudnote-af56.onrender.com";
      const url="http://localhost:5000";
      const response = await fetch(`${url}/api/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "jwt-token": localStorage.getItem('token')
        },
        body: JSON.stringify({ productId:product._id, quantity: product.stock})
      });
      const json = await response.json();
      if (json) {
        navigate("/cart");
      }
    }else{
      navigate('/login')
    }
  }
  return (
    <div className='container'>
        <div className="card">
            <img className="card-img-top" src={product.url} alt="error"/>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">{product.category}</p>
            <p className="card-text">Stock: {product.stock}</p>
            <Link to="/api/cart" className="btn btn-primary" onClick={myFunction} id='addtocart'>Add to Cart</Link>
        </div>
        </div>
    </div>
  )
}

export default Card