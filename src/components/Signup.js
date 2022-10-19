import React, { useEffect, useState } from 'react';
import Validation from './Validation';
import UseModal from './UseModal';
import SuccessModal from './SuccessModal';

export const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [dataIsAvailable, setDataIsAvailable] = useState(false);
  const { isShowing, toggle } = UseModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    setDataIsAvailable(true);
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsAvailable) {
      toggle();
    }
  }, [errors]);

  return (
    <div className="container signup-container">
      <div className="row">
        <div className="col-6">
          <div className="row title">
            <h1>Sign Up</h1>
          </div>
          <div className="row line-container">
            <span className="col-1 line"></span>
            <span className="col-auto sub-title">Sign Up With</span>
          </div>
          <div className="row justify-content-between signup-options">
            <div className="col-md-5 signup-option">
              <button className="signup-options-btn">
                <img
                  className="option-img"
                  src="https://raw.githubusercontent.com/sroy-be18/SignUpBootstrap/a8df55535492f76f9e75e47f67585bbfc74ac46b/google.svg"
                  alt="google-login"
                ></img>
                <div className="option-title">Sign up with Google</div>
              </button>
            </div>
            <div className="col-md-5 signup-option">
              <button className="signup-options-btn">
                <img
                  className="option-img"
                  src="https://raw.githubusercontent.com/sroy-be18/SignUpBootstrap/a8df55535492f76f9e75e47f67585bbfc74ac46b/fb.svg"
                  alt="faceook-login"
                ></img>
                <div className="option-title">Sign up with Facebook</div>
              </button>
            </div>
          </div>
          <div className="row form-container">
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="row upper-two">
                <div className="col-6 input-container">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  ></input>
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="col-6 input-container">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  ></input>
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              </div>
              <div className="row ">
                <div className="col input-container">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  ></input>
                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
                </div>
              </div>
              <div className="form-check terms-checkbox">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="checkbox"
                  required
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  I've read and agree with Terms of Service and our Privacy
                  Policy
                </label>
              </div>
              <div className="row">
                <button className="signup-button" type="submit">
                  <img
                    className="submit-img"
                    src="https://raw.githubusercontent.com/sroy-be18/SignUpBootstrap/main/arrow2.PNG"
                    alt="Sign Up Button"
                  ></img>
                </button>
              </div>
            </form>
          </div>
          <SuccessModal isShowing={isShowing} hide={toggle} />
          <div className="sign-in">
            Already have an account?
            <button className="sign-in-btn">Sign In</button>
          </div>
        </div>
        <div className="col-6 image-container">
          <img
            className="img"
            alt="rocket-img"
            src="https://raw.githubusercontent.com/sroy-be18/SignUpBootstrap/a8df55535492f76f9e75e47f67585bbfc74ac46b/image.svg"
          />
        </div>
      </div>
    </div>
  );
};
