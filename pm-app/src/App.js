import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/Projects/Details";
import ProjectsList from "./components/Projects/List";
import IssueDetails from "./components/Issues/Details";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import { loggedin } from "./services/auth";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./components/LandingPage";
import Profile from "./components/Profile";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  state = {
    loggedIn: null
  };

  setUser = user => {
    this.setState({
      loggedIn: user
    });
  };

  getUser = () => {
    loggedin().then(user => {
      this.setState({
        loggedIn: user
      });
    });
  };

  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <div className="App">
        <Navbar setUser={this.setUser} loggedIn={this.state.loggedIn} />

        <Switch>
          <Route
            exact
            path="/"
            //  component={Signup}
            //  render allows us to pass props to our component inside Routes
            render={() => <LandingPage setUser={this.setUser} />}
          />
          <Route
            exact
            path="/signup"
            //  component={Signup}
            //  render allows us to pass props to our component inside Routes
            render={(props) => <Signup {...props} setUser={this.setUser} />}
          />

          <Route
            exact
            path="/login"
            render={() => <Login setUser={this.setUser} />}
          />
          <Route
            exact
            path="/profile"
            render={(props) => <Profile {...props} user={this.state.loggedIn} />}
          />

          <Route
            exact
            path="/projects/:id"
            render={props => (
              <ProjectDetails {...props} user={this.state.loggedIn} />
            )}
          />

          <ProtectedRoute
            user={this.state.loggedIn}
            component={ProjectsList}
            exact={true}
            path="/projects"
          />

          <Route path="/issues/:issueId"
            render={props => (
              <IssueDetails {...props} user={this.state.loggedIn} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
