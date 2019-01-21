import React from "react";
import "./App.css";
import data from "./data";
import Navbar from "./components/Navbar/Navbar";
import CarsContainer from "./containers/CarsContainer";
import UsersContainer from "./containers/UsersContainer";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: [],
      makes: [],
      tempCars: data
    };
  }

  async componentDidMount() {
    const responseC = await fetch("http://localhost:3000/api/v1/cars");
    const responseM = await fetch("http://localhost:3000/api/v1/makes");
    const cars = await responseC.json();
    const makes = await responseM.json();
    this.setState({
      cars: cars.data.data,
      makes: makes.data.data
    });
  }
  render() {
    return (
      <div>
        This is the Main App!
        <Navbar />
        <CarsContainer
          tempData={this.state.tempCars}
          makes={this.state.makes}
          cars={this.state.cars}
        />
        <UsersContainer
          tempData={this.state.tempCars}
          makes={this.state.makes}
          cars={this.state.cars}
        />
      </div>
    );
  }
}

export default App;
