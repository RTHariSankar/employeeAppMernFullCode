import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { inputHandler, loginClicked } from './utils/Login&Signup/loginActions';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: ''
  });
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();

  const loginClickedWrapper = () => {
    loginClicked(input, setFormError, navigate);
  };

  return (
    <div className="container p-5">
      <div className="container mt-5 mx-auto">
        <div className="container mt-5">
          <div className="container mt-5 mb-5 text-center">
            <h1>LOGIN</h1>
          </div>
          <div className="row mb-4">
            <div className="col col-12 col-lg-5 col-md-7 col-sm-8 col-xl-5 col-xxl-5 mx-auto">
              <input
                type="email"
                className="form-control"
                onChange={(e) => inputHandler(e, setInput, input)}
                name="email"
                id="exampleInputEmail1"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="emailHelp"
                autoComplete="email"
              />
              {formError.email && <p className="text-danger">{formError.email}</p>}
            </div>
          </div>
          <div className="row mb-4">
            <div className="col col-12 col-lg-5 col-md-7 col-sm-8 col-xl-5 col-xxl-5 mx-auto">
              <input
                type="password"
                id="inputPassword5"
                onChange={(e) => inputHandler(e, setInput, input)}
                name="password"
                className="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="passwordHelpBlock"
                autoComplete="current-password"
              />
              {formError.password && <p className="text-danger">{formError.password}</p>}
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <button type="button" onClick={loginClickedWrapper} className="btn btn-primary btn-lg">
                Login
              </button>
            </div>
          </div>
        </div>

        <div className="container text-center mt-3">
          <p>
            Don't have an account?&nbsp;
            <a href="/signup">register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;