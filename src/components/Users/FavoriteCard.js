import React from "react";
import FavoriteDetails from "./FavoriteDetails";

const FavoriteCard = props => {
  const { favorites, removeFav, addToLikes } = props;

  return (
    <div>
      {favorites.map(car => (
        <FavoriteDetails
          key={car.unique}
          car={car}
          removeFav={removeFav}
          addToLikes={addToLikes}
        />
      ))}
    </div>
  );
};

export default FavoriteCard;
