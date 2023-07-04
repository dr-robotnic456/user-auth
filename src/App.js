import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    remember: false
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setUser((prevState) => ({
      ...prevState,
      [name]: newValue
    }));
  };

  return (
    <body className="skin-default card-no-border">
      <div className="preloader">
        <div className="loader">
          <div className="loader__figure"></div>
          <p className="loader__label">Elite admin</p>
        </div>
      </div>
      {/* <!-- ============================================================== -->
      <!-- Main wrapper - style you can find in pages.scss -->
      <!-- ============================================================== --> */}
      <section id="wrapper">
        <div className="login-register" style={{ backgroundImage: "url(../assets/images/background/login-register.jpg)" }}>
          <div className="login-box card">
            <div className="card-body">
              <form className="form-horizontal form-material" id="loginform" action="index.html">
                <h3 className="text-center m-b-20">Sign In</h3>
                <div className="form-group ">
                  <div className="col-xs-12">
                    <input
                      className="form-control"
                      type="text"
                      required=""
                      placeholder="Username"
                      name="username"
                      value={user.username}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-12">
                    <input
                      className="form-control"
                      type="password"
                      required=""
                      placeholder="Password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <div className="d-flex no-block align-items-center">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck1"
                          name="remember"
                          checked={user.remember}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="customCheck1">
                          Remember me
                        </label>
                      </div>
                      <div className="ms-auto">
                        <a href="#recoverform" id="to-recover" className="text-muted">
                          <i className="fas fa-lock m-r-5"></i> Forgot pwd?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group text-center">
                  <div className="col-xs-12 p-b-20">
                    <button className="btn w-100 btn-lg btn-info btn-rounded text-white" type="submit">
                      Log In
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                    <div className="social">
                      <button className="btn btn-facebook" data-bs-toggle="tooltip" title="Login with Facebook">
                        <i aria-hidden="true" className="fab fa-facebook-f"></i>
                      </button>
                      <button className="btn btn-googleplus" data-bs-toggle="tooltip" title="Login with Google">
                        <i aria-hidden="true" className="fab fa-google-plus-g"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-group m-b-0">
                  <div className="col-sm-12 text-center">
                    Don't have an account?{' '}
                    <a href="pages-register.html" className="text-info m-l-5">
                      <b>Sign Up</b>
                    </a>
                  </div>
                </div>
              </form>
              <form className="form-horizontal" id="recoverform" action="index.html">
                <div className="form-group ">
                  <div className="col-xs-12">
                    <h3>Recover Password</h3>
                    <p className="text-muted">Enter your Email and instructions will be sent to you! </p>
                  </div>
                </div>
                <div className="form-group ">
                  <div className="col-xs-12">
                    <input className="form-control" type="text" required="" placeholder="Email" />
                  </div>
                </div>
                <div className="form-group text-center m-t-20">
                  <div className="col-xs-12">
                    <button className="btn btn-primary btn-lg w-100 text-uppercase waves-effect waves-light" type="submit">
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default App;
