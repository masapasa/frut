import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { getProject } from "../services/auth"

export default class Profile extends Component {

  state = {
    projects: []
  }

  componentDidMount() {

    getProject().then(projects => {
      this.setState({ projects })
    })
  }

  render() {


    return (
      <div>
        {this.props.user && <div>
          <img className="profile-img" src={this.props.user.imgPath} alt="profileImg" />
          <h1>{this.props.user.username}</h1>
          {this.state.projects && this.state.projects.map(project => (
            <div key={project._id}>
              <Link to={`/projects/${project._id}`}>{project.title}</Link>
            </div>)

          )}

        </div>
        }

      </div>
    )
  }
}

