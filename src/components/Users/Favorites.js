import React from "react";
import FavoriteCard from "./FavoriteCard";

class Favorites extends React.Component {
  render() {
    const { carList, makeList, tempData, favorites, removeFav } = this.props;

    return (
      <div>
        Favorites Index is Ready!
        <FavoriteCard
          carList={carList}
          makeList={makeList}
          tempData={tempData}
          favorites={favorites}
          removeFav={removeFav}
        />
      </div>
    );
  }
}

export default Favorites;
