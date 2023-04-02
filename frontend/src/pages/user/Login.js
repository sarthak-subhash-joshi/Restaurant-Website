import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Login.css";
import loginImg from "./bg_img_restro.jpg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "../../context/userContext";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { user, isUserLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate("/");
    }
  }, [isUserLoggedIn]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const loginUser = async () => {
    try {
      const res = await axios.post("/auth/login", userData);
      if (res.status === 200) {
        toast.success(res.data.message);
        // add small delay
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
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
          name="email"
          placeholder="Email"
          value={userData.email}
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
        <button className="btn btn-success btn-login" onClick={loginUser}>
          Login
        </button>
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
