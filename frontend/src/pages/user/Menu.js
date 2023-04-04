import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Menu.css";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { useUserContext } from "../../context/userContext";

const Menu = () => {
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
      const response = await fetch(`/api/menu`);
      const json = await response.json();

      if (response.ok) {
        setItems(json);
      }
    };
    fetchItems();
  }, []);

  return (
    <>
      <Navbar />
      <div className="menu-container-main">
        <div className="row menu-container">
          {items &&
            items.map((elem) => {
              return (
                <>
                  <div className="col-lg-3 menu-card">
                    <p className="discount">{elem.discount}% off</p>
                    <img className="card-img-top" src={elem.img_url} alt="" />
                    <p>
                      <strong>Name : </strong>
                      {elem.title}
                    </p>
                    <p>
                      <strong>Price : </strong>
                      {elem.price} ₹
                    </p>
                    <div style={{ textAlign: "center", margin: "10px" }}>
                      {/* <button type="button" class="btn btn-success" >View Details</button> */}
                      <NavLink
                        to={`menu/${elem._id}`}
                        className="btn btn-success"
                      >
                        View Details
                      </NavLink>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Menu;
