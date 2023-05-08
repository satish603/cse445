import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = (props) => {
    const [credential, setcredential] = useState({"name":"", "email": "", "password": "", "regNo":"", "phone":"" });
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        //API calls
        const url="http://localhost:5000";
        // const url="http://localhost:5000";
        const response = await fetch(`${url}/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name:credential.name, email: credential.email, password: credential.password, regNo:credential.regNo, phone:credential.phone})
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem("token", json.authtokenn);
            navigate("/");
            props.showAlert("Signup Successful", "success");
        }
        else{
            props.showAlert("Invalid Credentials", "danger");
        }
    }

    const onchange = (e) => {
        setcredential({ ...credential, [e.target.name]: e.target.value })
    }
  return (
    <>
    <div className="container" style={{marginTop: "82px"}}>
    <section className="vh-100" style={{backgroundColor: '#eee'}}>
    <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: '25px'}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-2">Sign up</p>

                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example1c" >Your Name</label>
                      <input type="text" id="form3Example1c" className="form-control" onChange={onchange} name="name"/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example3c" >Your Email</label>
                      <input type="email" id="form3Example3c" className="form-control" onChange={onchange} name="email"/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4c" >Password</label>
                      <input type="password" id="form3Example4c" className="form-control" onChange={onchange} name="password"/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4c" name="regNo">Registration Number</label>
                      <input type="text" id="form3Example4c" className="form-control" onChange={onchange} name="regNo"/>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="form3Example4c" >Phone Number</label>
                      <input type="text" id="form3Example4c" className="form-control" onChange={onchange} name="phone"/>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 mt-4">
                    <button type="submit" className="btn btn-primary btn-lg">SignUp</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample pic"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    </>
  )
}

export default SignUp