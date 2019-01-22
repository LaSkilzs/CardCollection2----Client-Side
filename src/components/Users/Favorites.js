import React from "react";
import FavoriteCard from "./FavoriteCard";
import "./favorite.css";

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

    return (
      <React.Fragment>
        <div className="carlist">
          <FavoriteCard
            carList={carList}
            makeList={makeList}
            tempData={tempData}
            favorites={favorites}
            removeFav={removeFav}
            addToLikes={addToLikes}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Favorites;
