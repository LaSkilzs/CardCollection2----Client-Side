import React from "react";
import "./FavCSS/favoritedetails.css";

class FavoriteDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      showImage: false,
      showFavs: false
    };
  }

  handleImage = e => {
    e.preventDefault();
    this.setState({
      showImage: !this.state.showImage
    });
  };

  handleRemove = e => {
    e.preventDefault();
    this.props.removeFav(this.props.car);
  };

  handleClick = e => {
    e.preventDefault();
    console.log("clicked");
  };

  handleFav = () => this.setState({ showFavs: !this.state.showFavs });

  handleLikes = e => {
    this.props.addToLikes(e.target.value, this.props.car);
  };

  displayImage = index => {
    switch (index) {
      default:
      case true:
        return (
          <div className="img-container">
            <img
              src={this.props.car.image2}
              alt="car2"
              className="d-block w-100"
            />
          </div>
        );
      case false:
        return (
          <div className="img-container">
            <img
              src={this.props.car.image1}
              alt="car2"
              className="d-block w-100"
            />
          </div>
        );
    }
  };
  render() {
    const {
      name,
      price,
      likes,
      image1,
      model,
      unique,
      make_id,
      summary,
      horsepower,
      max_speed,
      acceleration_secs,
      drive,
      body
    } = this.props.car;

    if (this.state.showFavs) {
      return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto col-md-4 my-3">
                <button
                  className="btn btn-primary mb-5 text-capitalize"
                  type="button"
                  onClick={this.handleFav}
                >
                  back to favs
                </button>
                {this.displayImage(this.state.showImage)}
              </div>

              <div className="col-10 mx-auto col-md-4 my-3">
                <h1 className="text-uppercase">{make_id}</h1>
                <a
                  href="/"
                  className="btn btn-success mt-2 text-capitalize"
                  onClick={this.handleImage}
                >
                  next image
                </a>
                <a
                  href="/"
                  className="btn btn-danger mt-2 text-capitalize"
                  onClick={this.handleRemove}
                >
                  remove fav
                </a>
                <ul className="list-group mt-4">
                  <h2 className="mt-3 mb-4">Specs</h2>
                  <li className="list-group-item text-slanted">
                    Summary<p>{summary} </p>
                  </li>
                  <li className="list-group-item text-slanted">
                    Horsepower: {horsepower}hp
                  </li>
                  <li className="list-group-item text-slanted">
                    Max Speed: {max_speed}mph
                  </li>
                  <li className="list-group-item text-slanted">
                    Acceleration: {acceleration_secs}secs
                  </li>
                  <li className="list-group-item text-slanted">
                    Drive: {drive}
                  </li>
                  <li className="list-group-item text-slanted">Body: {body}</li>
                </ul>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else if (this.state.showFavs === false) {
      return (
        <React.Fragment>
          <div className="col-10 mx-auto col-md-4 my-3">
            <div className="card">
              <div className="img-container">
                <img
                  src={image1}
                  alt="car"
                  className="img-card-top"
                  style={{ height: "14rem" }}
                  onClick={this.handleFav}
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
                  className="btn btn-danger mx-2 text-capitalize"
                  onClick={this.handleRemove}
                >
                  remove fav
                </a>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default FavoriteDetails;
