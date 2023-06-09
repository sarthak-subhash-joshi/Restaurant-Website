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
        <div className="col-lg-6">
          <img
            className="details-image"
            src={item.img_url}
            alt=""
            style={{ width: "100%" }}
          />
        </div>

        <div className="col-lg-6">
          <div
            style={{
              marginBottom: "30px",
              fontWeight: "bold",
              fontSize: "40px",
            }}
          >
            <p>{item.title}</p>
          </div>

          <div className="description-container">
            <p style={{ fontSize: "20px" }}>
              <strong>Price : </strong>
              {item.price} ₹
            </p>

            <p style={{ fontSize: "20px" }}>
              <strong>Discount : </strong>
              {item.discount} %
            </p>
            <strong>Description : </strong>
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
