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
import User from "./components/Users/User";
import Showpage from "./components/Cars/Showpage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: [],
      makes: [],
      search: "",
      tempFilter: [...favs, ...data],
      tempCars: data,
      favorites: favs,
      tempFavorites: favs,
      car: {},
      parent: "",
      showDetailCar: false
    };
  }

  handleChange = e => {
    e.preventDefault();
    const newFilterList = [...this.state.tempFavorites].filter(car => {
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
    const tempFavs = [...this.state.favorites];
    const newFavs = tempFavs.filter(car => car.unique !== newCar.unique);

    this.setState({
      favorites: newFavs
    });
  };

  handleImage = (car, parent) => {
    console.log(car);
    console.log(this.state.showDetailCar);
    this.setState({
      car,
      parent: parent,
      showDetailCar: !this.state.showDetailCar
    });
  };

  async componentDidMount() {
    const responseC = await fetch("http://localhost:3000/api/v1/cars");
    const responseM = await fetch("http://localhost:3000/api/v1/makes");
    let cars = await responseC.json();
    let makes = await responseM.json();

    cars = cars.data.data.map(car => car.attributes);
    makes = makes.data.data.map(make => make.attributes);

    this.setState({
      cars,
      makes
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route
            path="/cars/:id"
            render={() => {
              return (
                <Showpage
                  car={this.state.car}
                  showDetailCar={this.state.showDetailCar}
                  parent={this.state.parent}
                />
              );
            }}
          />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginList} />
          <Route
            path="/cars"
            render={() => {
              return (
                <CarsContainer
                  tempData={this.state.tempCars}
                  makes={this.state.makes}
                  cars={this.state.cars}
                  addToFavorites={this.addToFavorites}
                  addToLikes={this.addToLikes}
                  tempFilter={this.state.tempFilter}
                  handleImage={this.handleImage}
                />
              );
            }}
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
                tempFilter={this.state.tempFilter}
              />
            )}
          />
          <Route path="/user/:username" component={User} />

          <Route component={props => <h1> Page not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
