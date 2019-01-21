import React from "react";
import FavoriteCard from "./FavoriteCard";

class Favorites extends React.Component {
  render() {
    const { carList, makeList, tempData } = this.props;
    return (
      <div>
        Favorites Index is Ready!
        <FavoriteCard
          carList={carList}
          makeeList={makeList}
          tempData={tempData}
        />
      </div>
    );
  }
}

export default Favorites;
