import React from "react";
import "../Login/home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.usersname !== "" ? (
          <div>
            <h1 style={{ color: "white" }}>
              Welcome {this.props.usersname} !{" "}
            </h1>
            <button
              type="buttton"
              className="btn btn-lg btn-dark"
              onClick={this.props.logout}
            >
              LOG OUT
            </button>
          </div>
        ) : (
          <div className="container">
            <h1 style={{ color: "white" }}>Welcome!</h1>
            <Link to="/login">
              <button type="buttton" className="btn btn-lg btn-success">
                LOG IN
              </button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
