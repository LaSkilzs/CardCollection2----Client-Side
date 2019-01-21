import React from "react";
import FavoriteDetails from "./FavoriteDetails";

const FavoriteCard = props => {
  const { tempData } = props;
  return (
    <div>
      FavoriteCard Ready!
      {tempData.map(car => (
        <FavoriteDetails key={car.unique} car={car} />
      ))}
    </div>
  );
};

export default FavoriteCard;
