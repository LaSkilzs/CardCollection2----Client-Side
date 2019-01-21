import React from "react";

const CarDetails = props => {
  const { name, price, likes, image1, model } = props.car;
  return (
    <React.Fragment>
      <div className="col-10 mx-auto col-md-6 col-lg4 my-3">
        <div className="card">
          <img
            src={image1}
            alt="car"
            className="img-card-top"
            style={{ height: "14rem" }}
          />
          <div className="card-body text-capitalize">
            <h6>{name + " " + model}</h6>
            <h6 className="text-warning text-slanted">{price}</h6>
            <h5>Likes: {likes}</h5>
          </div>
          <div className="card-footer">
            <button type="button" className="btn btn-primary text-capitalize">
              like
            </button>
            <a href="/" className="btn btn-success mx-2 text-capitalize">
              add to favorites
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CarDetails;
