import React from 'react'
import { Link } from "react-router-dom";

const Card = (props) => {
  const {product} = props;
  return (
    <div className='container'>
        <div className="card">
            <img className="card-img-top" src={product.url} alt="error"/>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">{product.category}</p>
            <p className="card-text">Stock: {product.stock}</p>
            <Link to="/" className="btn btn-primary">Book</Link>
        </div>
        </div>
    </div>
  )
}

export default Card