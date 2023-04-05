import React from "react";

const ImageCard = ({ Card }) => {
  return (
    <>
      {Card.map((elem) => {
        return (
          <>
            <div className="col-lg-4 container-images">
              <img
                src={elem.image}
                alt=""
                className="gallery-images"
                style={{ borderRadius: "5px", maxWidth: "85%", margin: "1rem" }}
              />
            </div>
          </>
        );
      })}
    </>
  );
};

export default ImageCard;
