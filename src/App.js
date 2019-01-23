import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import data from "./data";
import favs from "./favs";
import Navbar from "./components/Navbar/Navbar";
import CarsContainer from "./containers/CarsContainer";
import UsersContainer from "./containers/UsersContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginList from "./components/Login/LoginList";
import Home from "./components/Login/Home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: [],
      makes: [],
      search: "",
      tempCars: data,
      favorites: favs
    };
  }

  handleChange = e => {
    e.preventDefault();
    const newFilterList = [...this.state.favorites].filter(car => {
      return car.model.toLowerCase().includes(e.target.value.toLowerCase());
    });

    this.setState({
      search: e.target.value,
      favorites: newFilterList
    });
  };

  addToFavorites = car => {
    const filter = this.state.favorites.filter(fav => {
      return fav.unique !== car.unique;
    });
    const newFavorites = [...filter, car];
    this.setState(
      {
        favorites: newFavorites
      },
      () => {
        console.log(this.state.favorites);
      }
    );
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
    console.log(newCar);
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
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/login" component={LoginList} />
          <Route
            path="/cars"
            render={() => (
              <CarsContainer
                tempData={this.state.tempCars}
                makes={this.state.makes}
                cars={this.state.cars}
                addToFavorites={this.addToFavorites}
                addToLikes={this.addToLikes}
              />
            )}
          />
          <Route
            path="/favs"
            render={() => (
              <UsersContainer
                tempData={this.state.tempCars}
                makes={this.state.makes}
                cars={this.state.cars}
                favorites={this.state.favorites}
                removeFav={this.removeFav}
                addToLikes={this.addToLikes}
                handleChange={this.handleChange}
                search={this.state.search}
              />
            )}
          />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
