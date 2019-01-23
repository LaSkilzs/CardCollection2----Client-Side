import React from "react";
import Favorites from "../components/Users/Favorites";
import Search from "../components/Cars/Search";

class UsersContainer extends React.Component {
  state = {
    search: "",
    temporary: this.props.favorites,
    temporaryClone: this.props.favorites
  };

  handleChange = e => {
    e.preventDefault();
    const newFilterList = [...this.state.temporary].filter(car => {
      return car.model.toLowerCase().includes(e.target.value.toLowerCase());
    });

    this.setState({
      search: e.target.value,
      temporaryClone: newFilterList
    });
  };

  render() {
    const { cars, makes, tempData, removeFav, addToLikes } = this.props;

    const carList = cars.map(car => car.attributes);
    const makeList = makes.map(make => make.attributes);

    return (
      <div>
        <Search
          value={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Favorites
          carList={carList}
          makeList={makeList}
          tempData={tempData}
          favorites={this.state.temporaryClone}
          removeFav={removeFav}
          addToLikes={addToLikes}
        />
      </div>
    );
  }
}
export default UsersContainer;
