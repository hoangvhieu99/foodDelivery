import React, { useContext, useEffect, useState } from "react";
import "./LoginPopup.css";
import { assets } from "./../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }
    try {
      const response = await axios.post(newUrl, data);
      // console.log(response.data.success);
      if (!response.data.success) {
        toast.error(response.data.message);
      } else {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
        toast.success("Login successful");
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
    }
  };

  // off scroll when open pop-up
  useEffect(() => {
    if (setShowLogin) {
      // Disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // Enable scroll
      document.body.style.overflow = "auto";
    }

    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [setShowLogin]);
  return (
    <div className="login-popup">
      <img
        className="absolute top-3 right-3
        z-30 cursor-pointer"
        src={assets.cross_icon}
        alt=""
        onClick={() => {
          setShowLogin(false);
        }}
      />
      <div
        className={`containerLogin ${
          currState === "Login" ? "" : "sign-up-mode"
        }`}
      >
        <div className="forms-container">
          <div className="signIn-signUp">
            <form onSubmit={onLogin} className="sign-in-form flex-col">
              <h2 className="title">Sign In</h2>
              <div className="input-field gap-4 pl-5">
                <i className="bx bx-user"></i>
                <input
                  name="email"
                  onChange={onChangeHandler}
                  value={data.email}
                  type="text"
                  placeholder="Email"
                />
              </div>

              <div className="input-field gap-4 pl-5">
                <i className="bx bx-lock-alt"></i>
                <input
                  name="password"
                  onChange={onChangeHandler}
                  value={data.password}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <input type="submit" value="Log In" className="btn solid" />
              <div className="flex gap-3 items-start">
                <input type="checkbox" required className="mt-1.5" />
                <p>
                  By continuing, i agree to the terms of use & privacy policy
                </p>
              </div>
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="bx bxl-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </form>
            <form onSubmit={onLogin} className="sign-up-form flex-col">
              <h2 className="title">Sign Up</h2>
              <div className="input-field gap-4 pl-5">
                <i className="bx bx-user"></i>
                <input
                  name="name"
                  onChange={onChangeHandler}
                  value={data.name}
                  type="text"
                  placeholder="User Name"
                />
              </div>
              <div className="input-field gap-4 pl-5">
                <i className="bx bx-envelope"></i>
                <input
                  name="email"
                  onChange={onChangeHandler}
                  value={data.email}
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="input-field gap-4 pl-5">
                <i className="bx bx-lock-alt"></i>
                <input
                  name="password"
                  onChange={onChangeHandler}
                  value={data.password}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <input type="submit" value="Sign Up" className="btn solid" />
              <div className="flex gap-3 items-start">
                <input type="checkbox" required className="mt-1.5" />
                <p>
                  By continuing, i agree to the terms of use & privacy policy
                </p>
              </div>
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="bx bxl-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New Here ?</h3>
              <p>
                Welcome to our platform! Please enter your username and password
                to access your account. If you don't have an account yet, you
                can sign up for free.
              </p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={() => setCurrState("SignUp")}
              >
                Sign up
              </button>
            </div>
            <img src="img/1.png" alt="" className="img" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of Us?</h3>
              <p>
                Welcome to our platform! Please enter your username and password
                to access your account. If you don't have an account yet, you
                can sign up for free.
              </p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={() => setCurrState("Login")}
              >
                Sign in
              </button>
            </div>
            <img src="img/2.png" alt="" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
