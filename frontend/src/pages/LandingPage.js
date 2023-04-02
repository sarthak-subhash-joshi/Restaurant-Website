import React, { useContext } from "react";
import "./LandingPage.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import myImg from "./user/myImage.jfif";
import { useUserContext } from "../context/userContext";

const LandingPage = () => {
  const nav = useNavigate();
  const { user, isUserLoggedIn } = useUserContext();

  return (
    <div className="container-fluid landing-container">
      <div className="landing-header">
        <div>
          <h1>Restaurant</h1>
        </div>
        {isUserLoggedIn ? (
          <h4 style={{ color: "black" }}>Hi, {user?.data?.user?.name}</h4>
        ) : (
          <div>
            <button
              className="btn btn-outline-danger"
              onClick={() => nav("/login")}
            >
              SIGN IN
            </button>
          </div>
        )}
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
            <button className="btn btn-outline-danger">Order Now!</button>
          </div>
        </div>
        <div className="img-block col-md-6">
          <img src={myImg} alt="Food Item" className="dosa-img" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
