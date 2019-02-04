import React from "react";

class Showpage extends React.Component {
  constructor() {
    super();
    this.state = {
      showImage: false
    };
  }

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
      make_id,
      summary,
      horsepower,
      max_speed,
      acceleration_secs,
      drive,
      body
    } = this.props.car;

    console.log("showpage");
    // if (this.props.showDetailsCar) {
    return (
      <React.Fragment>
        <div>
          {this.props.parent === "cars" ? (
            <div className="container">
              <div className="row">
                <div className="col-10 mx-auto col-md-4 my-3">
                  <button
                    className="btn btn-primary mb-5 text-capitalize"
                    type="button"
                    onClick={this.onClick}
                  >
                    back to cars
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
                    onClick={this.handleFavorites}
                  >
                    add to favs
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
                    <li className="list-group-item text-slanted">
                      Body: {body}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
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
                    <li className="list-group-item text-slanted">
                      Body: {body}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
    // } else {
    //   return null;
    // }
  }
}

export default Showpage;
