import React, { Component } from 'react'
import { getProject } from "../services/auth"

export default class Profile extends Component {

  state = {
    projects: []
  }

  componentDidMount() {
    
  getProject().then(projects => {
    console.log(projects)
      this.setState({projects})
    })}

  render() {
    
    
    return (
      <div>
      {this.props.user && <div>
        <img src={this.props.user.imgPath} alt="profileImg"/>
        <h1>{this.props.user.username}</h1>
        {this.state.projects.map(project => (
          <p  key={project._id} >{project.title} </p>
        )
          
        )}
       
        </div>
      }
      
      </div>
    )
  }
}

