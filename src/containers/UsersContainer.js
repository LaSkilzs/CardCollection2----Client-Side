import React from "react";
import Favorites from "../components/Users/Favorites";

class UsersContainer extends React.Component {
  render() {
    const { cars, makes, tempData, favorites, removeFav } = this.props;
    const carList = cars.map(car => car.attributes);
    const makeList = makes.map(make => make.attributes);

    return (
      <div>
        Hello from UsersContainer!
        <Favorites
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
export default UsersContainer;
