import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = (props) => {
    const [credential, setcredential] = useState({ "email": "", "password": "" });
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        //API calls
        const url="https://cse445.vercel.app";
        // const url="http://localhost:5000";
        const response = await fetch(`${url}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credential.email, password: credential.password })
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem("token", json.authtokenn);
            navigate("/");
            props.showAlert("Login Successful", "success");
        }
        else{
            props.showAlert("Invalid Credentials", "danger");
        }
    }

    const onchange = (e) => {
        setcredential({ ...credential, [e.target.name]: e.target.value })
    }

  return (
    <div className="container my-5">
    <section className="h-100 gradient-form" style={{backgroundColor: '#eee'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">

                <div className="text-center">
                <Link className="navbar-brand" to="/" style={{fontSize: '2.3rem',fontFamily: 'Delicious Handrawn', color: '#fd5c63'}}>Donato</Link>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example11">Email</label>
                    <input type="email" id="form2Example11" className="form-control"
                      placeholder="Phone number or email address" name="email" onChange={onchange}/>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example22">Password</label>
                    <input type="password" id="form2Example22" className="form-control" name="password" onChange={onchange} minLength={5} required/>
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg mb-3" type="submit" style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)', width:'20rem'}}>Login</button>
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <Link to='/signup'><button type="button" className="btn btn-outline-danger">Create New</button></Link>
                  </div>

                </form>

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center" style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)'}}>
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">Welcome to our donation website! Your generous donations allow us to continue our mission of helping those in need.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Login