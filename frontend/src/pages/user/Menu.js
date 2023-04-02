import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
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
          {/* <div className="col-lg-3 menu-card">
            <p className="discount">10% off</p>
            <img
              className="card-img-top"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <p>
              <strong>Name : </strong>Rice Plate
            </p>
            <p>
              <strong>Price : </strong>80 ₹
            </p>
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "red" }}>* dummy data</p>
              <button type="button" class="btn btn-success " style={{margin:'10px'}}>View Details</button>
            </div>
          </div> */}

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
