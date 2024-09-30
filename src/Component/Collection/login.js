import React, { useEffect, useState } from "react";
import "../Collection/login.scss";
import { auth, provider } from "../../GoogleSignup/firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import log2 from "../../Assets/background.png";
import Container from "./Container";
import Figma from "../../Assets/figma.png";
// import google from "../../Assets/g-logo.png";
import unicorn from "../../Assets/img1.png";
import SignIn from "../../GoogleSignup/Signup";

const Login = () => {
  const [formData, inputHandler, handleClick, setFormData] = useState({
    login: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <div className="section">
        <div className="section-left">
          <img className="log" src={log2} alt="" />
        </div>
        <div className="section-right">
          <React.Fragment>
            <h1 className="icon">UI Unicon</h1>
            <img className="ui-image" src={unicorn} alt="" />
            <h2 className="heading">Nice to see you again</h2>
            <form onSubmit={handleSubmit}>
              <div className="login">
                <label>Login</label>
                <input
                  element="input"
                  placeholder="Enter your mail id"
                  id="login"
                  type="text"
                  value={formData.login}
                  onChange={inputHandler}
                />
              </div>
              <div className="password">
                <label>Password</label>
                <input
                  element="input"
                  placeholder="Enter your password"
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={inputHandler}
                />
              </div>

              <div className="enablebox">
                <input type="checkbox" name="Remember me" data-role="none" />
                <label className="enablebox-text">Rememberme?</label>
              </div>
              <div className="forgetpassword">
                <a className="links" href="/user/forgetpassword">
                  Forget password?
                </a>
              </div>
              <button>Sign Up</button>
              <div className="google">
                <span className="google-signup">
                  <a className="signup" href="/user/email">
                    <a>
                      {/* <img className="logo" src={google} alt="logo" /> */}
                    </a>

                    {/* <button className="btn" type="button" onClick={handleClick}>
                      Or sign in with Google
                    </button> */}

                    {/* <a onClick={handleClick}>Sign up with Google</a> */}
                  </a>
                  <div>
                    <SignIn />
                  </div>
                </span>
              </div>

              {/* <button className="btn">Or sign in with Google</button> */}
              <p>
                Dont have an account?
                <a href="/user/signup"> Signup Now</a>
              </p>
              <img className="figma" src={Figma} alt="" />
              <a href="/">@uiunicorn</a>
              <p className="copyright">Perfect Login In 2021</p>
            </form>
          </React.Fragment>
        </div>
        <div className="backgroundLayer"></div>
      </div>
    </Container>
  );
};
export default Login;
