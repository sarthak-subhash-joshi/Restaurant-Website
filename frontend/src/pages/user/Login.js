import React from "react";
import Navbar from "../../components/Navbar";
import "./Login.css";
import loginImg from "./bg_img_restro.jpg";

const Login = () => {
  return (
    <div className="row login-page">
      <div className="img-col">
        <img src={loginImg} className="bgimg" alt="bgimg" />
      </div>
      <div className="login-box">
        <h1 className="title-content">Hurry up Your Meal is Waiting🤤</h1>
        <input
          type="text"
          className="name"
          name="username"
          placeholder="Username"
        />
        <input
          type="password"
          className="pass"
          name="password"
          placeholder="Password"
        />
        <button className="btn btn-success btn-login">Login</button>
        <p className="p-register-account">
          Don't have account?{" "}
          <a className="p-register" href="/register">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
