import React from "react";

const FavoriteDetails = props => {
  const {
    image2,
    summary,
    name,
    horsepower,
    max_speed,
    acceleration_secs,
    drive,
    body,
    make_id
  } = props.car;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <button
              className="btn btn-primary mb-5 text-capitalize"
              type="button"
            >
              back to favs list
            </button>
            <img src={image2} alt="car2" className="d-block w-100" />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <h1 className="text-uppercase">{make_id}</h1>
            <a href="/" className="btn btn-success mt-2 text-capitalize">
              next image
            </a>
            <a href="/" className="btn btn-danger mt-2 text-capitalize">
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
              <li className="list-group-item text-slanted">Drive: {drive}</li>
              <li className="list-group-item text-slanted">Body: {body}</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FavoriteDetails;
