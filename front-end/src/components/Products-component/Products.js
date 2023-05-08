import React from 'react'
import { Link } from 'react-router-dom'
import '../Products-component/products.css'

const Products = () => {
  return (
    <div className="container-fluid mt-5 service-style" id="serviceid">
    <div className="row">
        <div className="col-md-10 col-12 mx-auto">
            <h1 className="text-center main-heading">Products</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="box">
                        <div className="our-services settings">
                            <div className="icon">
                                <img src="images/responsive.png" alt="" height="80" width="80"/>
                            </div>
                            <Link className="heading" to="/api/getproduct/electronic">Electronic</Link>
                            <p>Laptop, Mobile, Calculator, Keyboard, etc...</p>
                        </div>
                    </div>                    
                </div>
                <div className="col-md-4">
                    <div className="box">
                        <div className="our-services speedup">
                            <div className="icon">
                                <img src="images/stationary.png" alt="" height="80" width="80"/>
                            </div>
                            <Link className="heading" to="/api/getproduct/stationary">Stationary</Link>
                            <p>Book, CV Files, Pens, Geometry, etc...</p>
                        </div>
                    </div>                    
                </div>
                <div className="col-md-4">
                    <div className="box">
                        <div className="our-services privacy">
                            <div className="icon">
                                <img src="images/utility.png" alt="" height="80" width="80"/>
                            </div>
                            <Link className="heading" to="/api/getproduct/utilities">Utilities</Link>
                            <p>Buckets, Mug, Dustbin, Bottles, etc...</p>
                        </div>
                    </div>                    
                </div>
                <div className="col-md-4">
                    <div className="box">
                        <div className="our-services backups">
                            <div className="icon">
                                <img src="images/bedding.png" alt="" height="80" width="80"/>
                            </div>
                            <Link className="heading" to="/api/getproduct/bedings">Bedings</Link>
                            <p>Mattres, Pillow, Blankets, etc...</p>
                        </div>
                    </div>                    
                </div>
                <div className="col-md-4">
                    <div className="box">
                        <div className="our-services ssl">
                            <div className="icon">
                                <img src="images/tool.png" alt="" height="80" width="80"/>
                            </div>
                            <Link className="heading" to="/api/getproduct/tools">Tools</Link>
                            <p>Engineering Kit, Drawing Kit, Drawing Board, etc...</p>
                        </div>
                    </div>                    
                </div>
                <div className="col-md-4">
                    <div className="box">
                        <div className="our-services database">
                            <div className="icon">
                                <img src="images/more.png" alt="" height="80" width="80"/>
                            </div>
                            <Link className="heading" to="/api/getproduct/others">Others</Link>
                            <p>Bag, Trolley, Lamp, Chair, etc...</p>
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