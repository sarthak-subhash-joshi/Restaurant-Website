import React, { useState } from "react";
import axios from "axios";
import "./SubmitItem.css";
import { toast, ToastContainer } from "react-toastify";

const SubmitItem = () => {
  const [title, setTitle] = useState("");
  const [img_url, setImgUrl] = useState("");
  const [discount, setDiscount] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !img_url || !discount || !price || !description) {
      toast.error("Please fill all the fields");
      return;
    }
    const item = { title, img_url, discount, price, description };
    const response = await axios.post("/api/menu", item);

    if (response.status === 200) {
      setTitle("");
      setImgUrl("");
      setDiscount("");
      setPrice("");
      setDescription("");
      toast.success(response.data.message);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else if (response.status === 401) {
      toast.error("Unauthorized owner");
    } else {
      toast.error(response.data.error);
    }
  };

  return (
    <>
      <form action="" className="create" onSubmit={handleSubmit}>
        <h3 style={{ marginBottom: "3%", color: "#7149C6" }}>Add a new Dish</h3>

        <label>Name of Dish : </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label>Paste image url of Dish : </label>
        <input
          type="text"
          onChange={(e) => setImgUrl(e.target.value)}
          value={img_url}
        />

        <label>Discount : </label>
        <input
          type="number"
          onChange={(e) => setDiscount(e.target.value)}
          value={discount}
        />

        <label>Price : </label>
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />

        <label>Add Description: </label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <button>Add Dish</button>
      </form>
      <ToastContainer />
    </>
  );
};

export default SubmitItem;
