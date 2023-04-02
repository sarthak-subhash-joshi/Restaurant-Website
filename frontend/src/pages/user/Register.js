import React from "react";
import Navbar from "../../components/Navbar";
import "./Register.css";
import loginImg from "./bg_img_restro.jpg";

const Register = () => {
  return (
    <div className="row register-page">
      <div className="img-col">
        <img src={loginImg} className="bgimg" alt="bgimg" />
      </div>
      <h1 className="title-content">
        Register fast!
        <br />
        We can't wait to server you🤗
      </h1>
      <div className="register-box">
        <input
          type="email"
          className="email"
          name="email"
          placeholder="Email"
        />
        <input
          type="text"
          className="name"
          name="name"
          placeholder="Full Name"
        />
        <input
          type="password"
          className="pass"
          name="password"
          placeholder="Password"
        />
        <input
          type="password"
          className="confirm-pass"
          name="confirm-pass"
          placeholder="Confirm Password"
        />
        <button className="btn btn-success btn-login">Register</button>
        <p className="p-register-account">
          Already Registered?{" "}
          <a className="p-register" href="/login">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
