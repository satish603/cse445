import React from 'react'
import { Link } from 'react-router-dom'
import '../Products-component/products.css'

const Products = () => {
  return (
    <div class="container-fluid mt-5 service-style" id="serviceid">
    <div class="row">
        <div class="col-md-10 col-12 mx-auto">
            <h1 class="text-center main-heading">Products</h1>
            <div class="row">
                <div class="col-md-4">
                    <div class="box">
                        <div class="our-services settings">
                            <div class="icon">
                                <img src="images/settings.png" alt="" height="80" width="80"/>
                            </div>
                            <Link className="heading" to="/api/getproduct/electronic">Electronic</Link>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, maxime?</p>
                        </div>
                    </div>                    
                </div>
                <div class="col-md-4">
                    <div class="box">
                        <div class="our-services speedup">
                            <div class="icon">
                                <img src="images/settings.png" alt="" height="80" width="80"/>
                            </div>
                            <Link className="heading" to="/api/getproduct/stationary">Stationary</Link>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, maxime?</p>
                        </div>
                    </div>                    
                </div>
                <div class="col-md-4">
                    <div class="box">
                        <div class="our-services privacy">
                            <div class="icon">
                                <img src="images/settings.png" alt="" height="80" width="80"/>
                            </div>
                            <Link className="heading" to="/api/getproduct/utilities">Utilities</Link>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, maxime?</p>
                        </div>
                    </div>                    
                </div>
                <div class="col-md-4">
                    <div class="box">
                        <div class="our-services backups">
                            <div class="icon">
                                <img src="images/settings.png" alt="" height="80" width="80"/>
                            </div>
                            <Link className="heading" to="/api/getproduct/bedings">Bedings</Link>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, maxime?</p>
                        </div>
                    </div>                    
                </div>
                <div class="col-md-4">
                    <div class="box">
                        <div class="our-services ssl">
                            <div class="icon">
                                <img src="images/settings.png" alt="" height="80" width="80"/>
                            </div>
                            <Link className="heading" to="/api/getproduct/tools">Tools</Link>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, maxime?</p>
                        </div>
                    </div>                    
                </div>
                <div class="col-md-4">
                    <div class="box">
                        <div class="our-services database">
                            <div class="icon">
                                <img src="images/settings.png" alt="" height="80" width="80"/>
                            </div>
                            <Link className="heading" to="/api/getproduct/others">Others</Link>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, maxime?</p>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Products