import React from "react";
import Favorites from "../components/Users/Favorites";
import Search from "../components/Data/Search";

class UsersContainer extends React.Component {
  render() {
    const {
      cars,
      makes,
      tempData,
      removeFav,
      addToLikes,
      favorites,
      search,
      handleChange
    } = this.props;

    const carList = cars.map(car => car.attributes);
    const makeList = makes.map(make => make.attributes);

    return (
      <div>
        <Search value={search} handleChange={handleChange} />
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
