import React from "react";
import Showpage from "./Showpage";
import "./CarCSS/cardetails.css";

class CarDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCar: false,
      showImage: false,
      car: {}
    };
  }
  handleFavorites = e => {
    e.preventDefault();
    this.props.addToFavorites(this.props.car);
  };
  handleLikes = e => {
    e.preventDefault();
    this.props.addToLikes(e.target.value, this.props.car);
  };
  onClick = e => {
    e.preventDefault();
    let car = this.props.tempFilter.find(car => car.unique == e.target.id);
    this.setState({
      showCar: !this.state.showCar,
      car
    });
  };
  handleRemove = e => {
    e.preventDefault();
    this.props.removeFav(this.props.car);
  };

  render() {
    const { name, price, likes, image1, model, unique } = this.props.car;

    if (this.props.parent === "cars") {
      return (
        <React.Fragment>
          <div className="col-10 mx-auto col-md-4 col-lg4 my-3">
            <div className="card">
              <div className="img-container">
                <img
                  src={image1}
                  id={unique}
                  alt="car"
                  className="img-card-top"
                  style={{ height: "14rem" }}
                  onClick={this.onClick}
                />
              </div>
              <div className="card-body text-capitalize">
                <h6>{name + " " + model}</h6>
                <h6 className="text-warning text-slanted">{price}</h6>
                <h5 className="likes">Likes: {likes}</h5>
              </div>
              <div className="card-footer">
                <button
                  id={unique}
                  type="button"
                  value={likes}
                  className="btn btn-primary text-capitalize"
                  onClick={this.handleLikes}
                >
                  like
                </button>
                <a
                  href="/"
                  id={unique}
                  className="btn btn-success mx-2 text-capitalize"
                  onClick={this.handleFavorites}
                >
                  add to favs
                </a>
              </div>
            </div>
          </div>
          <Showpage showCar={this.state.showCar} car={this.state.car} />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="col-10 mx-auto col-md-4 col-lg4 my-3">
            <div className="card">
              <div className="img-container">
                <img
                  src={image1}
                  id={unique}
                  alt="car"
                  className="img-card-top"
                  style={{ height: "14rem" }}
                  onClick={this.onClick}
                />
              </div>
              <div className="card-body text-capitalize">
                <h6>{name + " " + model}</h6>
                <h6 className="text-warning text-slanted">{price}</h6>
                <h5 className="likes">Likes: {likes}</h5>
              </div>
              <div className="card-footer">
                <button
                  id={unique}
                  type="button"
                  value={likes}
                  className="btn btn-primary text-capitalize"
                  onClick={this.handleLikes}
                >
                  like
                </button>
                <a
                  href="/"
                  id={unique}
                  className="btn btn-success mx-2 text-capitalize"
                  onClick={this.handleRemove}
                >
                  remove favs
                </a>
              </div>
            </div>
          </div>
          <Showpage showCar={this.state.showCar} car={this.state.car} />
        </React.Fragment>
      );
    }
  }
}

export default CarDetails;
