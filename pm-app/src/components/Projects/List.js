import React from "react";
import AddProject from "./Add";
import axios from "axios";
import { Link } from "react-router-dom";

class ProjectsList extends React.Component {
  state = {
    projects: []
  };

  getData = () => {
    axios
      .get((process.env.REACT_APP_HEROKU_URL || "http://localhost:5000") + "/api/projects", { withCredentials: true })
      .then(response => {
        this.setState({
          projects: response.data
        });
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>‚
          {this.state.projects.map(project => {
          return (
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }} key={project._id}>
              <Link to={`/projects/${project._id}`}>
                <h3>{project.title}</h3>
              </Link>
            </div>
          );
        })}
        </div>
        <div>
          <AddProject getData={this.getData} />
        </div>
      </div>
    );
  }
}

export default ProjectsList;
