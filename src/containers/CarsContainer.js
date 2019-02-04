import React from "react";
import CarsIndex from "../components/Cars/CarsIndex";
import Search from "../components/Data/Search";
import Filter from "../components/Data/Filter";

class CarsContainer extends React.Component {
  state = {
    search: "",
    temporary: this.props.cars,
    temporaryClone: [...this.props.cars],
    value: ""
  };

  handleChange(e) {
    this.props.cars.filter(car =>
      car.model.toLowerCase().includes(e.target.value.toLowerCase())
    );
  }

  advanceSearch = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { addToFavorites, addToLikes, cars, makes, handleImage } = this.props;

    return (
      <div>
        <Search
          value={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <CarsIndex
          carList={cars}
          makeList={makes}
          tempData={this.state.temporaryClone}
          addToFavorites={addToFavorites}
          addToLikes={addToLikes}
          tempFilter={this.props.tempFilter}
          handleImage={handleImage}
        />
        <Filter
          carList={cars}
          makeList={makes}
          tempFilter={this.props.tempFilter}
          value={this.state.value}
        />
      </div>
    );
  }
}
export default CarsContainer;
