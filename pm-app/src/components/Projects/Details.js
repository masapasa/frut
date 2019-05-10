import React from "react";
import { Link } from "react-router-dom";
import EditProject from "./Edit";
import AddIssue from "../Issues/Add";
import CommList from "../Comments/CommList";
import axios from "axios";

class ProjectDetails extends React.Component {
  state = {
    project: {}
  };

  getProject = () => {
    const id = this.props.match.params.id;

    axios
      .get(`http://localhost:5000/api/projects/${id}`, {
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

    axios.delete(`http://localhost:5000/api/projects/${id}`).then(response => {
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

  componentDidMount() {
    this.getProject();
  }

  render() {
    const { project } = this.state;
 

    let editBlock = <></>;
    
    if (this.props.user && this.props.user._id === project.user) {
      editBlock = (
        <div>
          <EditProject project={project} getDetails={this.getProject} />
          <button
            style={{ marginTop: "10px" }}
            className="btn btn-danger"
            onClick={this.deleteProject}
          >
            Delete project
          </button>
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
              
              <div>
                <CommList issueId={issue._id} clicked={this.handleClick}/>
              </div>
                {issue.comments && issue.comments.map(el => {
                  return(
                    <div key={el._id} >
                      {el.content}
                    </div>
                  )
                })}
              </div>
              
            );
          })}

        {editBlock}

        <AddIssue project={project} getProject={this.getProject} />
        <br />

        <Link to="/projects">Back</Link>
      </div>
    );
  }
}

export default ProjectDetails;
