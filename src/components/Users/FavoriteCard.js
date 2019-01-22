import React from "react";
import FavoriteDetails from "./FavoriteDetails";

const FavoriteCard = props => {
  const { favorites, removeFav } = props;

  console.log(props);
  return (
    <div>
      FavoriteCard Ready!
      {favorites.map(car => (
        <FavoriteDetails key={car.unique} car={car} removeFav={removeFav} />
      ))}
    </div>
  );
};

export default FavoriteCard;
