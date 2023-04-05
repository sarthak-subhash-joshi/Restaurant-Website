import React, { useContext, useEffect } from "react";
import "./LandingPage.css";
import { Link, useNavigate } from "react-router-dom";
import myImg from "../assets/myImage.jfif";
import { useUserContext } from "../context/userContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const { user, isUserLoggedIn } = useUserContext();

  const logoutUser = async () => {
    try {
      const res = await axios.get("/auth/logout");
      if (res.status === 200) {
        toast.success(res.data.message);

        // add small delay
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid landing-container">
      <div className="landing-header">
        <div>
          <h1>Restaurant</h1>
        </div>
        <div className="button-div">
          {user?.isOwner && (
            <div>
              <button
                className="btn btn-outline-danger"
                onClick={() => navigate("/owner")}
              >
                ADMIN
              </button>
            </div>
          )}
          {isUserLoggedIn ? (
            <h4
              style={{ color: "black", cursor: "pointer", margin: "0px" }}
              className="user_name"
              onClick={logoutUser}
            >
              Hi, {user?.name}
            </h4>
          ) : (
            <div>
              <button
                className="btn btn-outline-danger"
                onClick={() => navigate("/login")}
              >
                SIGN IN
              </button>
            </div>
          )}
        </div>
      </div>
      <section className="row section-block">
        <div className="tagline col-md-6">
          <div>
            <p className="tagline-p">
              It's not just Food,
              <br /> It's an <span className="exp">Experience</span>
            </p>
          </div>
          <div className="action-buttons">
            <Link to="/userMenu" className="btn btn-danger btn-menu">
              View Menu
            </Link>
            <Link to="/cart" className="btn btn-outline-danger">
              Order Now!
            </Link>
          </div>
        </div>
        <div className="img-block col-md-6">
          <img src={myImg} alt="Food Item" className="dosa-img" />
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default LandingPage;
