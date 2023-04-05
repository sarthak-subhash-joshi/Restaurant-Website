import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./DetailsOfItem.css";
import { toast, ToastContainer } from "react-toastify";

const DetailsOfItem = () => {
  const [item, setItem] = useState("");

  const { id } = useParams("");

  const fetchItem = async () => {
    const response = await fetch("/api/menu/" + id);
    const json = await response.json();

    if (response.ok) {
      setItem(json);
    }
  };

  fetchItem();

  const addToCart = async () => {
    try {
      const response = await axios.post(`/cart/addToCart/${id}`);
      // console.log(response);

      if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="details-main-container row">
        <div className="col-lg-5">
          <img className="details-image" src={item.img_url} alt="" />
        </div>

        <div className="col-lg-6">
          <div className="landing-page-top">
            <h2>
              Welcome to <strong>PCCoE</strong> Restaurant
            </h2>
          </div>

          <div style={{ textAlign: "center", margin: "20px" }}>
            <h2>{item.title}</h2>
          </div>

          <p style={{ fontSize: "30px" }}>
            <strong>Price : </strong>
            {item.price} ₹
          </p>
          <p style={{ fontSize: "30px" }}>
            <strong>Discount : </strong>
            {item.discount} %
          </p>
          <p style={{ fontSize: "30px" }}>
            <strong>Description : </strong>
          </p>

          <div className="description-container">
            <p>{item.description}</p>
          </div>
          <button
            className="btn btn-primary"
            style={{ marginTop: "1rem" }}
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default DetailsOfItem;
