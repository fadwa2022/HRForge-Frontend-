import React, { useState } from "react";
import img from "@/helpers/images/undraw_remotely_2j6y.svg";
import "@/helpers/css/style.css";
import "@/helpers/js/main.js";
import { Link, useNavigate } from "react-router-dom";
import { accountService } from "@/_services/accountService";


function Login() {
  let navigate = useNavigate()

    const [credentials ,setCredentials] =useState({
      username:'',
      password:''

    })

    const onChange = (e) => {
      setCredentials({
          ...credentials,
          [e.target.name]: e.target.value
      })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    accountService.login(credentials)
        .then(res => {
            accountService.saveToken(res.data['access-token'])
             navigate('/admin', {replace: true})
        })
        .catch(error => console.log(error))
}
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="@/helpers/fonts/icomoon/style.css" />
        <link rel="stylesheet" href="@/helpers/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="@/helpers/css/bootstrap.min.css" />
        <link rel="stylesheet" href="@/helpers/css/style.css" />
        <title>Login #7</title>
      </head>
      <body>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={img} alt="Image2" className="img-fluid" />
              </div>
              <div className="col-md-6 contents">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="mb-4">
                      <h3>Sign In</h3>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                        consectetur adipisicing.
                      </p>
                    </div>

                    <form onSubmit={onSubmit} method="post">
                      <div className="form-group first">
                        <label htmlFor="username">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          value={credentials.username} onChange={onChange}
                        />
                      </div>
                      <div className="form-group last mb-4">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          value={credentials.password} onChange={onChange}

                        />
                      </div>
                      <div className="d-flex mb-5 align-items-center">
                        <label className="control control--checkbox mb-0">
                          <span className="caption">Remember me</span>
                          <input type="checkbox" defaultChecked={true} />
                          <div className="control__indicator"></div>
                        </label>
                        <span className="ml-auto">
                          <Link to="login" className="forgot-pass">
                            Forgot Password
                          </Link>
                        </span>
                      </div>
                      <input
                        type="submit"
                        value="Log In"
                        className="btn btn-block btn-primary"
                      />
                      <span className="d-block text-left my-4 text-muted">
                        &mdash; or login with &mdash;
                      </span>
                      <div className="social-login">
                        <Link href="#" className="facebook">
                          <span className="icon-facebook mr-3"></span>
                        </Link>
                        <Link href="#" className="twitter">
                          <span className="icon-twitter mr-3"></span>
                        </Link>
                        <Link href="#" className="google">
                          <span className="icon-google mr-3"></span>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="@/helpers/js/jquery-3.3.1.min.js"></script>
        <script src="@/helpers/js/popper.min.js"></script>
        <script src="@/helpers/js/bootstrap.min.js"></script>
        <script src="@/helpers/js/main.js"></script>
      </body>
    </html>
  );
}

export default Login;
