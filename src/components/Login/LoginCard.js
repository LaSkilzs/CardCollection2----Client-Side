import React from "react";
import "./login.css";
import API from "../../API";

class LoginCard extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      usersname: "",
      password: "",
      email: ""
    };
  }

  handleChange = e => {
    if (e.target.name === "username") {
      this.setState({ usersname: e.target.value });
    } else if (e.target.name === "email") {
      this.setState({ email: e.target.value });
    } else if (e.target.name === "password") {
      this.setState({ password: e.target.value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    let user = {
      usersname: this.state.usersname,
      password: this.state.password,
      email: this.state.email
    };

    if (API.login(user) !== {}) {
      console.log(user.usersname);
      this.props.login(user.usersname);
    }
  };

  render() {
    return (
      <div>
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <h3 className="h3 mb-3 font-weight-normal">Please sign in</h3>
          <input
            type="text"
            id="inputUsername"
            className="form-control"
            name="username"
            placeholder="username"
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            name="password"
            placeholder="password"
            onChange={this.handleChange}
            required
          />
          <br />
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            name="email"
            placeholder="email address"
            onChange={this.handleChange}
            required
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-danger btn-block" type="submit">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

export default LoginCard;
