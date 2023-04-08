import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import "../Menu.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/userContext";

const Cart = () => {
  const [items, setItems] = useState(null);
  const { user, isUserLoggedIn } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`/cart/getCartItems`);
      const json = await response.json();
      console.log(json.data.user.cart);
      if (response.ok) {
        setItems(json.data.user.cart);
      }
    };
    fetchItems();
  }, []);

  return (
    <>
      <Navbar />
      <div className="menu-container-main" style={{ fontFamily: "Poppins" }}>
        <div className="row menu-container">
          {items &&
            items.map((elem) => {
              return (
                <>
                  <div className="col-lg-3 menu-card">
                    <p className="discount">{elem.discount}% off</p>
                    <img
                      className="card-img-top"
                      src={elem.img_url}
                      alt=""
                      style={{ marginTop: "10px", borderRadius: "10px" }}
                    />
                    <p style={{ marginBottom: 0, marginTop: "10px" }}>
                      <strong>Name: </strong>&nbsp;
                      {elem.title}
                    </p>
                    <p>
                      <strong>Price: </strong>&nbsp;₹{elem.price}
                    </p>
                    <div style={{ textAlign: "center", marginBottom: "10px", display:"flex", justifyContent:"space-between" }}>
                      {/* <button type="button" class="btn btn-success" >View Details</button> */}
                      <NavLink
                        to={`menu/${elem._id}`}
                        className="btn btn-success"
                      >
                        View Details
                      </NavLink>
                      <button
                        className="btn btn-danger"
                        style={{  }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Cart;
