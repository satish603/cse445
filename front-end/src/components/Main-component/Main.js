import React from 'react'
import '../Main-component/main.css'

const Main = () => {
  return (
    <div class="container-fluid mt-5">
            <div class="row">
                <div class="col-md-10 col-12 mx-auto" style={{marginTop: '3rem'}}>
                    <div class="row">
                        <div class="col-md-6 col-12 main-text order-md-0 order-1 d-flex justify-content-center align-items-start flex-column">
                            <h1>EMPOWERING THE NEEDY IS OUR PRIORITY.</h1>
                            <h1>CREATE A BIG IMPACT WITH A SMALL DONATION.</h1>
                            <p>WE ARE A TEAM OF <span class="bold-style">Professional Developer✌️</span></p>
                            <button class="buton">Read more</button>
                        </div>
                        <div class="col-md-6 col-12 main-text main-img order-md-1 order-0">
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