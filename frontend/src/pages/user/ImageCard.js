import React from "react";

const ImageCard = ({ Card }) => {
  return (
    <> 
      {Card.map((elem) => {
        return (
          <>
            <div className="col-lg-3 col-md-4 col-sm -12 container-images">
              <img src={elem.image} alt="" className="gallery-images" />
            </div>
          </>
        );
      })}
    </>
  );
};

export default ImageCard;
