import React from "react";
import axios from "axios";
import EditIssue from './Edit'
import CommList from '../Comments/CommList'
import { getIssues, githubScraping } from "../../services/auth";
import { Link } from 'react-router-dom'

class IssueDetails extends React.Component {
  state = {
    title: "",
    description: "",
    comments: "",
    type: "",
    status: "",
    priority: "",
    severity: "",
    user: "",
    _id: "",
    matchedIssues: [],
    editBlock: false,
    githubdata: []
  };

  // componentDidMount() {
  //   this.getIssue()
  // }

  getIssue = () => {
    const issueId = this.props.match.params.issueId;
    axios
      .get((process.env.REACT_APP_HEROKU_URL || "http://localhost:5000") + `/api/issues/${issueId}`, {
        withCredentials: true
      })
      .then(response => {
        getIssues(response.data.type).then(issues => {
          this.setState({ matchedIssues: issues })

          githubScraping(response.data.type).then(data => {
            this.setState({ githubdata: data })

          })

        })
        this.setState({
          title: response.data.title,
          description: response.data.description,
          comments: response.data.comments,
          type: response.data.type,
          status: response.data.status,
          priority: response.data.priority,
          severity: response.data.severity,
          user: response.data.user,
          _id: response.data._id
        });
      });
  }
  showEditBlock = () => {
    this.setState({
      editBlock: !this.state.editBlock
    })
  }


  render() {
    if (this.props.match.params.issueId !== this.state._id) {
      this.getIssue()
    }
    const { _id, title, description, type, status, priority, severity, comments, user, matchedIssues, githubdata } = this.state
    let editBlock = <></>;
    if (this.props.user && this.props.user._id === user) {
      editBlock = (
        <div>
          <EditIssue id={_id} issueDetails={this.getIssue} clicked={this.showEditBlock} />

        </div>
      );
    }

    return (
      <div>
        <h1>Title: {title}</h1>
        <h2>description: {description}</h2>
        <div style={{ left: '100px', position: 'absolute' }}>Issues with same type:
          {matchedIssues.filter((issue) => issue._id !== this.state._id).map((issue) => {
          return <p>
            <Link key={issue._id} to={`/issues/${issue._id}`} >{issue.title} </Link >
          </p>
        })}
        </div>
        <p>type: {type} </p>

        <p>status: {status} </p>
        <p>priority: {priority} </p>
        <p>severity: {severity} </p>
        <p>{this.state.githubdata && this.state.githubdata.items && this.state.githubdata.items.map(data => (
          <a href={`${data.url}`} >{data.title}</a>
        ))} </p>


        <div>
          <CommList issueId={this.state._id} clicked={this.getIssue} />
          {comments && comments.map(comment => {
            return (
              <div key={comment._id} >
                {comment.content}
              </div>
            )
          })}
        </div>
        <div>
          {this.state.editBlock && <div> {editBlock} </div>}
          <button style={{ marginTop: "10px" }}
            className="btn btn-danger"
            onClick={this.showEditBlock} >Edit Issue</button>
        </div>
      </div>
    );
  }
}

export default IssueDetails;
