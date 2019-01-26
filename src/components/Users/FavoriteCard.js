import React from "react";
// import FavoriteDetails from "./FavoriteDetails";
import "./FavCSS/favoritecard.css";

const FavoriteCard = props => {
  const { favorites, removeFav, addToLikes } = props;

  return (
    <React.Fragment>
      <div className="container my-3">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
            <h1 className="text-slanted">My Favorite Cars</h1>
          </div>
        </div>
        <div className="row">
          {favorites.map(car => (
            <FavoriteDetails
              key={car.unique}
              car={car}
              removeFav={removeFav}
              addToLikes={addToLikes}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default FavoriteCard;
