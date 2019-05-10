import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/auth";

class Navbar extends React.Component {
  state = {
    loggedIn: this.props.loggedIn
  };

  componentDidUpdate(prevProps) {
    if (this.props.loggedIn !== prevProps.loggedIn) {
      this.setState({ loggedIn: this.props.loggedIn });
    }
  }

  handleLogout = () => {
    logout().then(() => {
      this.setState({ loggedIn: null });
      this.props.setUser(null);
    });
  };

  render() {
    return (
      <nav className="nav-style">
        {this.state.loggedIn ? (
          <ul>
            <li>Welcome {this.state.loggedIn.username} !</li>
            <li>
              <Link to="/projects" style={{ textDecoration: "none" }}>
                Projects
              </Link>
            </li>
            <li onClick={this.handleLogout}>
              <Link to="/">Log out</Link>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Sign up
              </Link>
            </li>
            <li>
              <Link to="/login" style={{ textDecoration: "none" }}>
                Log in
              </Link>
            </li>
          </ul>
        )}
      </nav>
    );
  }
}

export default Navbar;
