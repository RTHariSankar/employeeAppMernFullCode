import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { inputHandler, registerClicked } from './utils/Login&Signup/registrationActions';

const Register = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [formError, setFormError] = useState({});

  const handleInput = (e) => inputHandler(e, setFormValues, formValues);
  const handleRegister = () => registerClicked(formValues, setFormError, navigate);

  return (
    <div className="container p-5">
      <div className="container mt-5 mx-auto">
        <div className="mt-5 mb-5 text-center">
          <h1>REGISTRATION</h1>
        </div>

        <div className="row mb-4">
          <div className="col col-12 col-lg-5 col-md-7 col-sm-8 col-xl-5 col-xxl-5 mx-auto">
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleInput}
              value={formValues.name}
              placeholder="Full Name"
              aria-describedby="fullNameHelp"
              autoComplete="name"
            />
            {formError.name && <p className="text-danger">{formError.name}</p>}
          </div>
        </div>

        <div className="row mb-4">
          <div className="col col-12 col-lg-5 col-md-7 col-sm-8 col-xl-5 col-xxl-5 mx-auto">
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleInput}
              value={formValues.email}
              placeholder="Email"
              aria-describedby="emailHelp"
              autoComplete="email"
            />
            {formError.email && <p className="text-danger">{formError.email}</p>}
          </div>
        </div>

        <div className="row mb-4">
          <div className="col col-12 col-lg-5 col-md-7 col-sm-8 col-xl-5 col-xxl-5 mx-auto">
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={handleInput}
              value={formValues.username}
              placeholder="Username"
              aria-describedby="usernameHelp"
              autoComplete="username"
            />
            {formError.username && <p className="text-danger">{formError.username}</p>}
          </div>
        </div>

        <div className="row mb-4">
          <div className="col col-12 col-lg-5 col-md-7 col-sm-8 col-xl-5 col-xxl-5 mx-auto">
            <input
              type="password"
              name="password"
              onChange={handleInput}
              value={formValues.password}
              className="form-control"
              placeholder="Password"
              aria-describedby="passwordHelp"
              autoComplete="new-password"
            />
            {formError.password && <p className="text-danger">{formError.password}</p>}
          </div>
        </div>

        <div className="row mb-4">
          <div className="col col-12 col-lg-5 col-md-7 col-sm-8 col-xl-5 col-xxl-5 mx-auto">
            <input
              type="password"
              id="confirmPasswordInput"
              className="form-control"
              placeholder="Confirm Password"
              onChange={handleInput}
              value={formValues.confirmPassword}
              name="confirmPassword"
              aria-describedby="confirmPasswordHelp"
              autoComplete="new-password"
            />
            {formError.confirmPassword && <p className="text-danger">{formError.confirmPassword}</p>}
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <button type="button" onClick={handleRegister} className="btn btn-primary btn-lg">
              Signup
            </button>
          </div>
        </div>
      </div>

      <div className="container text-center mt-3">
        <p>
          Have an account?&nbsp;
          <a href="/">login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;