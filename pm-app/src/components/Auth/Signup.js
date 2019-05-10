import React from "react";
import { signup } from "../../services/auth";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    email:""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password, email } = this.state;

    signup(username, password, email).then(user => {
      this.props.setUser(user);
      this.setState({
        username: "",
        password: "",
        email: ""
      });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>username: </label>
            <input
              value={this.state.username}
              onChange={this.handleChange}
              type="text"
              name="username"
            />
          </div>
          <div>
            <label>password: </label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
            />
          </div>
          <div>
            <label>email: </label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
              name="email"
            />
          </div>
          <input type="submit" value="signup" />
        </form>
      </div>
    );
  }
}

export default Signup;
