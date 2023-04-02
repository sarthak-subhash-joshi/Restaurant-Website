import React, { useState } from "react";
import "./LandingPage.css";
import { NavLink, useNavigate } from "react-router-dom";
import myImg from "./user/myImage.jfif";

const LandingPage = () => {
  const nav = useNavigate();
  return (
    <div className="container-fluid landing-container">
      <div className="landing-header">
        <div>
          <h1>Restaurant</h1>
        </div>
        <div>
          <button
            className="btn btn-outline-danger"
            onClick={() => nav("/login")}
          >
            SIGN IN
          </button>
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
            <button className="btn btn-danger btn-menu">View Menu</button>
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
