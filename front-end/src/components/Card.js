import React from 'react'
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className='col-md-4 col-12 mx-auto my-2'>
        <div className="card">
            <img className="card-img-top" src="https://images.unsplash.com/photo-1588912914017-923900a34710?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1219&q=80" alt="error"/>
        <div className="card-body">
            <h5 className="card-title">Math Book</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn btn-primary">Book</Link>
        </div>
        </div>
    </div>
  )
}

export default Card