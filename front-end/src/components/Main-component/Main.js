import React from 'react'
import '../Main-component/main.css'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-10 col-12 mx-auto" style={{marginTop: '3rem'}}>
                    <div className="row">
                        <div className="col-md-6 col-12 main-text order-md-0 order-1 d-flex justify-content-center align-items-start flex-column">
                            <h1>EMPOWERING THE NEEDY IS OUR PRIORITY.</h1>
                            <h1>CREATE A BIG IMPACT WITH A SMALL DONATION.</h1>
                            <p>WE ARE A TEAM OF <span className="bold-style">Professional Developer✌️</span></p>
                            <Link to='/about'><button className="buton">Read more</button></Link>
                        </div>
                        <div className="col-md-6 col-12 main-text main-img order-md-1 order-0">
                            <figure>
                                <img src="images/img1.png" alt="img1" height="450" width="550"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Main