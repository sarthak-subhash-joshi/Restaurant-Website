import React from "react";
import axios from "axios";

const ItemDetails = ({ item, toast }) => {
  const handleClick = async () => {
    const response = await axios.delete(`/api/menu/${item._id}`);
    if (response.status === 200) {
      toast.success(response.data.message);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else {
      toast.error(response.data.error);
    }
  };

  return (
    <>
      <div className="listed-item">
        <img
          className="listed-items-img"
          src={item.img_url}
          listed-items-img
          alt=""
        />
        <div>
          <p>
            <strong>Name : </strong>
            {item.title}
          </p>
          <p>
            <strong>Price : </strong>
            {item.price} ₹
          </p>
          <p>
            <strong>Discount : </strong>
            {item.discount}%
          </p>
        </div>
        <button className="listed-item-btn">
          <i class="fa-solid fa-trash" onClick={handleClick}></i>
        </button>
      </div>
    </>
  );
};

export default ItemDetails;
