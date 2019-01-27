import React from "react";
import CarDetails from "./CarDetails";
import "./CarCSS/carcard.css";

const CarCard = props => {
  const {
    tempData,
    addToFavorites,
    addToLikes,
    favorites,
    parent,
    removeFav,
    tempFilter
  } = props;
  return (
    <React.Fragment>
      {props.parent === "cars" ? (
        <div className="container my-3">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">Car Collection</h1>
            </div>
          </div>
          <div className="row">
            {tempData.map(car => {
              return (
                <CarDetails
                  key={car.unique}
                  car={car}
                  addToFavorites={addToFavorites}
                  addToLikes={addToLikes}
                  parent={parent}
                  tempFilter={tempFilter}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="container my-3">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">My Favorite Cars</h1>
            </div>
          </div>
          <div className="row">
            {favorites.map(car => (
              <CarDetails
                key={car.unique}
                car={car}
                removeFav={removeFav}
                addToLikes={addToLikes}
                parent={parent}
              />
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CarCard;
