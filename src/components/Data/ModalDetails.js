import React from "react";

const ModalDetail = props => {
  if (props.value === "make") {
    return (
      <React.Fragment>
        <div className="make">
          <div className="input-group">
            <select className="form-control">
              <option default="Choose...">Choose..</option>
              <option value="1">Porsche</option>
              <option value="2">Lamborghini</option>
              <option value="3">Ferrari</option>
              <option value="4">Maserati</option>
              <option value="5">Koenigsegg</option>
              <option value="6">Aston Martin</option>
            </select>
            <div className="input-group-append">
              <button className="btn btn-outline-primary" type="button">
                choose
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else if (props.value === "model") {
    return (
      <React.Fragment>
        <div className="make">
          <div className="input-group">
            <select className="form-control">
              <option default="Choose...">Choose..</option>
              <option value="488">488</option>
              <option value="Macan">`Macan</option>
              <option value="Agera">Agera</option>
              <option value="Aston">Aston</option>
              <option value="Aventador">Aventador</option>
              <option value="Boxster Models">Boxster Models</option>
              <option value="Carrera Models">Carrera Models</option>
              <option value="Cayenne Models">Cayenne Models</option>
              <option value="Cayman Models">Cayman Models </option>
              <option value="Concept">Concept</option>
              <option value="Few Off">Few Off</option>
              <option value="Ghibli">Ghibli</option>
              <option value="Gran Turismo">Gran Turismo</option>
              <option value="GT2 RS Models">GT2 RS Models </option>
              <option value="GT3 Models">GT3 Models</option>
              <option value="GTC4">GTC4</option>
              <option value="GTS Models">GTS Models</option>
              <option value="Huracan">Huracan</option>
              <option value="Konenigsegg">Konenigsegg </option>
              <option value="LaFerrari ">LaFerrari </option>
              <option value="Levante">Levante</option>
              <option value="Panamera Models">Panamera Models</option>
              <option value="Quattroporte">Quattroporte</option>
              <option value="Rapide">Rapide </option>
              <option value="Superfast">Superfast</option>
              <option value="Levante">Levante</option>
              <option value="Targa 4 ">Targa 4 </option>
              <option value="Turbo Models">Turbo Models</option>
              <option value="Urus">Urus </option>
              <option value="Vantage">Vanquish</option>
              <option value="Vantage">Vantage</option>
            </select>
            <div className="input-group-append">
              <button className="btn btn-outline-primary" type="button">
                choose
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else if (props.value === "price") {
    return (
      <React.Fragment>
        <div className="make">
          <div className="input-group">
            <select className="form-control">
              <option default="Choose...">Choose..</option>
              <option value="100,000">0-100,000</option>
              <option value="500,000">100,001-500,000</option>
              <option value="2,000,000">500,001-2,000,000</option>
              <option value="2,000,000+">2,000,000++</option>
            </select>
            <div className="input-group-append">
              <button className="btn btn-outline-primary" type="button">
                choose
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return null;
  }
};
export default ModalDetail;
