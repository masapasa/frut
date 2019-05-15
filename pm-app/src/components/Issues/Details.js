import React from "react";
import axios from "axios";
import EditIssue from './Edit'
import CommList from '../Comments/CommList'

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
    editBlock: false
  };

  componentDidMount() {
    this.getIssue()
    }

    getIssue = () => {
      const issueId = this.props.match.params.issueId;
      axios
      .get(`http://localhost:5000/api/issues/${issueId}`, {
        withCredentials: true
      })
      .then(response => {
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
        const {_id, title, description, type, status, priority, severity, comments, user} = this.state
      let editBlock = <></>;
      if (this.props.user && this.props.user._id === user) {
      editBlock = (
        <div>
          <EditIssue  id={_id} issueDetails={this.getIssue} clicked={this.showEditBlock} />
          
        </div>
      );
    }
      
    return (
      <div>
        <h1>Title: {title}</h1>
        <h2>description: {description}</h2>
        <p>type: {type} </p>
        <p>status: {status} </p>
        <p>priority: {priority} </p>
        <p>severity: {severity} </p>
        
        <div>
        <CommList issueId={this.state._id} clicked={this.getIssue} />
        {comments && comments.map(comment => {
                  return(
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
