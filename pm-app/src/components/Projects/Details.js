import React from "react";
import { Link } from "react-router-dom";
import EditProject from "./Edit";
import AddIssue from "../Issues/Add";
import axios from "axios";
import Invitation from "../Comments/Invitation";

class ProjectDetails extends React.Component {
  state = {
    project: {},
    editBlock: false,
    inviteBlock: false
  };

  getProject = () => {
    const id = this.props.match.params.id;

    axios
      .get((process.env.HEROKU_URL || "http://localhost:5000") + `/api/projects/${id}`, {
        withCredentials: true
      })
      .then(response => {
        this.setState({
          project: response.data
        });
      });
  };

  deleteProject = () => {
    const id = this.props.match.params.id;

    axios.delete((process.env.HEROKU_URL || "http://localhost:5000") + `/api/projects/${id}`).then(response => {
      // redirects to /projects
      this.props.history.push("/projects");
    });
  };

  handleClick = ()=>{
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:5000/api/projects/${id}`, {
        withCredentials: true
      })
      .then(response => {
        this.setState({
          project: response.data
        })});
  }
  showEditBlock = () => {
    this.setState({
      editBlock: !this.state.editBlock
    })
  }
  showInviteBlock = () => {
    this.setState({
      inviteBlock: !this.state.inviteBlock
    })
  }

  componentDidMount() {
    this.getProject();}

  render() {
    const { project } = this.state;
 

    let editBlock = <></>;

    if (this.props.user && this.props.user._id === project.user) {
      editBlock = (
        <div className="edit-block" >
          
          {this.state.editBlock && <EditProject project={project} getDetails={this.getProject} clicked={this.showEditBlock}/>}

        <button style={{ marginTop: "10px" }}
                        className="btn btn-danger"
                        onClick={this.showEditBlock} >Edit Project</button>
          
            <button
            style={{ marginTop: "10px" }}
            className="btn btn-danger"
            onClick={this.deleteProject}
          >
            Delete project
          </button>
          <button style={{ marginTop: "10px" }}
            className="btn btn-primary"
            onClick={this.showInviteBlock}>Invite</button>
          
          {this.state.inviteBlock && <Invitation project={project} />}

        </div>
      );
    }


    return (
      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        
        

        {project.issues && project.issues.length > 0 && <h3>issues</h3>}
        {project.issues &&
          project.issues.map(issue => {
            return (
              <div key={issue._id}>
              <Link to={`/issues/${issue._id}`}>{issue.title} {issue.description}</Link>
              </div>
              
            );
          })}
        <div> {editBlock} </div> 

                        
                         
        <AddIssue project={project} getProject={this.getProject} />
        <br />
        

        <Link to="/projects">Back</Link>
      </div>
    );
  }
}

export default ProjectDetails;
