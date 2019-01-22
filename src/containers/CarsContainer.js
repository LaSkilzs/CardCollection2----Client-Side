import React from "react";
import CarsIndex from "../components/Cars/CarsIndex";

class CarsContainer extends React.Component {
  render() {
    const { cars, makes, tempData, addToFavorites, addToLikes } = this.props;
    const carList = cars.map(car => car.attributes);
    const makeList = makes.map(make => make.attributes);

    return (
      <div>
        Hello from CarsContainer!
        <CarsIndex
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
export default CarsContainer;
