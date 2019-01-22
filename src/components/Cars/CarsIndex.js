import React from "react";
import CarCard from "./CarCard";

class CarsIndex extends React.Component {
  render() {
    const {
      carList,
      makeList,
      tempData,
      addToFavorites,
      addToLikes
    } = this.props;
    return (
      <div>
        CarsIndex is Ready!
        <CarCard
          carList={carList}
          makeList={makeList}
          tempData={tempData}
          addToFavorites={addToFavorites}
          addToLikes={addToLikes}
        />
      </div>
    );
  }
}
export default CarsIndex;
