import React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      makeList: this.props.makeList,
      carList: this.props.carList,
      tempList: this.props.tempFilter,
      makeFilter: [],
      modelFilter: [],
      priceFilter: []
    };
  }

  // Separate Filters

  makeName = number => this.props.makeList.find(make_id => make_id === number);

  tempFilter = () => {};

  advanceFilter = value => {
    console.log(value);
    if (value === "model") {
    } else if (value === "make") {
    } else if (value === "price") {
    } else {
      return;
    }
  };

  modelFilter = () => {};

  priceFilter = () => {};
  // Or Filters
  // && OR Filters

  render() {
    return <React.Fragment>Hello from Filter!</React.Fragment>;
  }
}

export default Filter;
