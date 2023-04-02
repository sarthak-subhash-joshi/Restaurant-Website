import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Register.css";
import loginImg from "./bg_img_restro.jpg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPass: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const tokenCheck = async () => {
      try {
        const user = await axios.get("/auth/getById");
        if (user.status === 200) {
          console.log(user.data);
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    };

    tokenCheck();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const registerUser = async () => {
    try {
      if (userData.password !== userData.confirmPass)
        return alert("Password does not match");
      const data = {
        email: userData.email,
        name: userData.name,
        password: userData.password,
      };
      const res = await axios.post("/auth/register", data);
      if (res.status === 201) {
        toast.success(res.data.message);
        // add small delay
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {}
  };

  return (
    <div className="row register-page">
      <div className="img-col">
        <img src={loginImg} className="bgimg" alt="bgimg" />
      </div>
      <h1 className="title-content">
        Register fast!
        <br />
        We can't wait to serve you🤗
      </h1>
      <div className="register-box">
        <input
          type="email"
          className="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          className="name"
          name="name"
          placeholder="Full Name"
          value={userData.name}
          onChange={handleChange}
        />
        <input
          type="password"
          className="pass"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          className="confirm-pass"
          name="confirmPass"
          placeholder="Confirm Password"
          value={userData.confirmPass}
          onChange={handleChange}
        />
        <button className="btn btn-success btn-login" onClick={registerUser}>
          Register
        </button>
        <p className="p-register-account">
          Already Registered?{" "}
          <a className="p-register" href="/login">
            Login
          </a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
