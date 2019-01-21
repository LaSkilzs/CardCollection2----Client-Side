import React from "react";
import CarDetails from "./CarDetails";

const CarCard = props => {
  const { tempData } = props;
  return (
    <React.Fragment>
      <div className="container my-3">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
            <h1 className="text-slanted">Car Collection</h1>
          </div>
        </div>
        <div className="row">
          {tempData.map(car => {
            return <CarDetails key={car.unique} car={car} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default CarCard;
