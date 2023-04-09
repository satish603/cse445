import React from 'react'
import '../About-component/about.css'
const About = () => {
  return (
    <div class="container-fluid mt-5 about-style" id="aboutid">
            <div class="row">
                <div class="col-md-10 col-12 mx-auto">
                    <h1 class="text-center main-heading">About</h1>
                    <p class="text-center sub-heading">dedicated to make a positive impact in our community</p>
                    <div class="row">
                        <div class="col-md-6 col-12 main-text main-img">
                            <figure>
                                <img src="images/img2.jpg" alt="img1" height="450" width="550"/>
                            </figure>
                        </div>
                        <div class="col-md-6 col-12 main-text d-flex justify-content-center align-items-start flex-column">
                            <div style={{textAlign:'center'}}>
                                <h1>WE ARE A UNITED FORCE OF SOCIAL WORKERS.✌️</h1>
                            </div>
                            <p>Welcome to our donation website! Your generous donations allow us to continue our mission of helping those in need. With your help, we can continue to make a meaningful and lasting impact in the lives of those who need it the most. Thank you for your support in helping us create a better world for all. Donate today and join us in making a real difference!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default About