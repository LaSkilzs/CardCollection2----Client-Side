import React from "react";
import CarsIndex from "../components/Cars/CarsIndex";
import Search from "../components/Cars/Search";

class CarsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  handleChange = e => {
    e.preventDefault();

    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("hello from handleSubmit");
  };
  render() {
    const { cars, makes, tempData, addToFavorites, addToLikes } = this.props;
    const carList = cars.map(car => car.attributes);
    const makeList = makes.map(make => make.attributes);

    return (
      <div>
        <Search
          value={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
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
