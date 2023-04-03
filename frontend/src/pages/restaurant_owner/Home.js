import React from "react";
import SubmitItem from "./SubmitItem";
import "./Home.css";
import ListedItems from "./ListedItems";

const Home = () => {
  return (
    <>
      <div className="landing-page-top" style={{ margin: "20px 7% 3%" }}>
        <h2>Restaurant</h2>
      </div>

      <div className="row" style={{ margin: "2%" }}>
        <div className="col-lg-5 owner-submit-form-container">
          <SubmitItem />
        </div>

        <div className="col-lg-5">
          <ListedItems />
        </div>
      </div>
    </>
  );
};

export default Home;
