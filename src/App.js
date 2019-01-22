import React from "react";
import "./App.css";
import data from "./data";
import favs from "./favs";
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
      tempCars: data,
      favorites: favs
    };
  }

  addToFavorites = car => {
    const filter = this.state.favorites.filter(
      fav => fav.unique !== car.unique
    );
    const newFavorites = [...filter, car];
    this.setState({
      favorites: newFavorites
    });
  };

  addToLikes = (likes, changecar) => {
    let newlikes = parseInt(likes);
    newlikes++;
    changecar.likes = newlikes;

    let tempData = [...this.state.tempCars];

    const newtempData = tempData.map(car => {
      if (car.unique === changecar.unique) {
        return (car = changecar);
      }
      return car;
    });

    this.setState({
      tempCars: newtempData
    });
  };

  removeFav = newCar => {
    const tempFavs = [...this.state.favorites];
    const newFavs = tempFavs.filter(car => car.unique !== newCar.unique);

    this.setState({
      favorites: newFavs
    });
  };

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
    console.log(this.state.favorites);
    return (
      <div>
        This is the Main App!
        <Navbar />
        <CarsContainer
          tempData={this.state.tempCars}
          makes={this.state.makes}
          cars={this.state.cars}
          addToFavorites={this.addToFavorites}
          addToLikes={this.addToLikes}
        />
        <UsersContainer
          tempData={this.state.tempCars}
          makes={this.state.makes}
          cars={this.state.cars}
          favorites={this.state.favorites}
          removeFav={this.removeFav}
        />
      </div>
    );
  }
}

export default App;
