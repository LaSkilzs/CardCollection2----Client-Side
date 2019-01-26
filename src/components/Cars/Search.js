import React from "react";
import "./search.css";

class Search extends React.Component {
  render() {
    const { value, handleSubmit, handleChange } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h1 className="text-slanted text-capitalize">
                search for cars with
                <strong className="text-danger"> Car Collection</strong>
              </h1>
              <form className="mt-4" onSubmit={handleSubmit}>
                <label htmlFor="search" className="search text-capitalize">
                  find cars by model, make or name
                </label>

                <div className="input-group-prepend">
                  <button
                    type="submit"
                    className="input-group-text bg-primary text-white"
                  >
                    <i className="fas fa-search" />
                  </button>
                  <input
                    type="text"
                    name="search"
                    placeholder="Ferrari"
                    value={value}
                    onChange={handleChange}
                    className={"form-control"}
                  />
                </div>
                <a
                  href="#"
                  className="advanceSearch badge badge-light"
                  style={{ color: "grey", fontSize: "1rem" }}
                >
                  advance search options
                </a>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Search;
