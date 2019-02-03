import React from "react";

import CarCard from "../Cars/CarCard";
import "./FavCSS/favorite.css";
import "../Cars/CarCard";

class Favorites extends React.Component {
  render() {
    const {
      carList,
      makeList,
      tempData,
      favorites,
      removeFav,
      addToLikes
    } = this.props;

    const parent = "favs";

    return (
      <React.Fragment>
        <div className="carlist">
          <CarCard
            carList={carList}
            makeList={makeList}
            tempData={tempData}
            favorites={favorites}
            removeFav={removeFav}
            addToLikes={addToLikes}
            parent={parent}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Favorites;
