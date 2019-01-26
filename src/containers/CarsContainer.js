import React from "react";
import CarsIndex from "../components/Cars/CarsIndex";
import Search from "../components/Cars/Search";

class CarsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      carList: [],
      makeList: [],
      temporary: this.props.tempData,
      temporaryClone: this.props.tempData
    };
  }

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

  // handleSubmit = e => {
  //   e.preventDefault();

  //   const newtempData = [...this.props.tempData];
  //   const newFilter = newtempData.filter(car =>
  //     car.model.includes(this.state.search)
  //   );
  //   this.setState({
  //     temporary: newFilter
  //   });
  // };

  componentDidMount() {
    const carList = this.props.cars.map(car => car.attributes);
    const makeList = this.props.makes.map(make => make.attributes);
    this.setState({
      carList,
      makeList
    });
  }

  render() {
    const { addToFavorites, addToLikes } = this.props;

    return (
      <div>
        <Search
          value={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <CarsIndex
          carList={this.state.carList}
          makeList={this.state.makeList}
          tempData={this.state.temporaryClone}
          addToFavorites={addToFavorites}
          addToLikes={addToLikes}
        />
      </div>
    );
  }
}
export default CarsContainer;
