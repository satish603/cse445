import React from 'react'
import './footer.style.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
  <div className="inner-footer">
    <div className="footer-items">
      <h1>Donato</h1>
      <p>EMPOWERING THE NEEDY IS OUR PRIORITY.</p>
    </div>
    <div className="footer-items">
      <h3>Quick Links</h3>
      <div className="border1"></div> 
        <ul className='ulClass'>
        <li className='liClass'><Link to="/">Home</Link></li>
        <li className='liClass'><Link to="/api/product/addproduct">Add Product</Link></li>
        <li className='liClass'><Link to="/cart">Cart</Link></li>
        <li className='liClass'><Link to="/buy">Buy Request</Link></li>
        </ul>
    </div>

    <div className="footer-items">
      <h3>Products</h3>
      <div className="border1"></div> 
        <ul className='ulClass'>
          <li className='liClass'><Link to="/api/getproduct/electronic">Electronic</Link></li>
          <li className='liClass'><Link to="/api/getproduct/stationary">stationary</Link></li>
          <li className='liClass'><Link to="/api/getproduct/tools">Tools</Link></li>
          <li className='liClass'><Link to="/api/getproduct/others">Others</Link></li>
        </ul>
    </div>

    <div className="footer-items">
      <h3>Contact us</h3>
      <div className="border1"></div>
        <ul className='ulClass'>
          <li className='liClass'><i className="fa fa-map-marker" aria-hidden="true"></i>Lovely Proffesional University</li>
          <li className='liClass'><i className="fa fa-phone" aria-hidden="true"></i>9473123560</li>
          <li className='liClass'><i className="fa fa-envelope" aria-hidden="true"></i>madhav22pathak@gmail.com</li>
        </ul>
      

        <div className="social-media">
          <Link to="/"><i className="fab fa-instagram"></i></Link>
          <Link to="/"><i className="fab fa-facebook"></i></Link>
          <Link to="/"><i className="fab fa-google-plus-square"></i></Link>
        </div> 
    </div>
  </div>
  
  <div className="footer-bottom">
    Copyright &copy; Donato 2023.
  </div>
</div>
  )
}

export default Footer