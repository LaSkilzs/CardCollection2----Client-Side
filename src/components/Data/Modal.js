import React from "react";
import "./DataCSS/modal.css";
import ModalDetail from "./ModalDetails";

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  advSearchOptions = e => this.setState({ value: e.target.value });

  render() {
    if (this.props.showModal) {
      return (
        <div>
          <div>
            Advanced Search
            <button
              type="button"
              className=" search btn btn-outline-danger"
              onClick={this.props.displayModal}
            >
              <i className="fas fa-times" />
            </button>
          </div>
          {/* <h1>{title goes here}</h1> */}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Options
              </label>
            </div>
            <select className="form-control" onChange={this.advSearchOptions}>
              <option default="Choose..">Choose...</option>
              <option value="make">make</option>
              <option value="model">model</option>
              <option value="price">price</option>
            </select>
          </div>
          <ModalDetail
            displayModal={this.displayModal}
            value={this.state.value}
            advanceSearch={this.props.advanceSearch}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Modal;
