import React from "react";
import FavoriteCard from "./FavoriteCard";

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
      <div>
        <FavoriteCard
          carList={carList}
          makeList={makeList}
          tempData={tempData}
          favorites={favorites}
          removeFav={removeFav}
          addToLikes={addToLikes}
        />
      </div>
    );
  }
}

export default Favorites;
