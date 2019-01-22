import React from "react";
import Favorites from "../components/Users/Favorites";

class UsersContainer extends React.Component {
  render() {
    const {
      cars,
      makes,
      tempData,
      favorites,
      removeFav,
      addToLikes
    } = this.props;
    const carList = cars.map(car => car.attributes);
    const makeList = makes.map(make => make.attributes);

    return (
      <div>
        <Favorites
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
export default UsersContainer;
