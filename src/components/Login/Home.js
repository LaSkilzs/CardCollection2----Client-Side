import React from "react";
import { Link } from "react-router-dom";
import User from "../Users/User";

class Home extends React.Component {
  render() {
    return (
      <div>
        {this.props.usersname !== "" ? (
          <div>
            <h1>Welcome {this.props.usersname} ! </h1>
            <button
              type="buttton"
              className="btn btn-lg btn-dark"
              onClick={this.props.logout}
            >
              LOG OUT
            </button>
          </div>
        ) : (
          <div>
            <h1>Welcome!</h1>
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
