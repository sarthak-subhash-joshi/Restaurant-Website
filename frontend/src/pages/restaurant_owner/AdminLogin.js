import React, { useEffect, useState } from "react";
import axios from "axios";
import "../user/Login.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserContext } from "../../context/userContext";

const AdminLogin = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const { user, isUserLoggedIn } = useUserContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (isUserLoggedIn && user.isOwner) {
      navigate("/owner");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const loginUser = async () => {
    try {
      const res = await axios.post("/auth/admin/login", userData);
      if (res.status === 200) {
        toast.success(res.data.message);
        // add small delay
        setTimeout(() => {
          navigate("/owner");
        }, 3000);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="title-content">
          Hurry up Your Customers are Waiting for food
        </h1>
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
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
