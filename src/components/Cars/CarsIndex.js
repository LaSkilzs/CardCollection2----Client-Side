import React from "react";
import CarCard from "./CarCard";
import "./CarCSS/carindex.css";

class CarsIndex extends React.Component {
  render() {
    const {
      carList,
      makeList,
      tempData,
      addToFavorites,
      addToLikes,
      tempFilter,
      handleImage
    } = this.props;

    const parent = "cars";

    return (
      <section className="carlist">
        <CarCard
          carList={carList}
          makeList={makeList}
          tempData={tempData}
          addToFavorites={addToFavorites}
          addToLikes={addToLikes}
          parent={parent}
          tempFilter={tempFilter}
          handleImage={handleImage}
        />
      </section>
    );
  }
}
export default CarsIndex;
