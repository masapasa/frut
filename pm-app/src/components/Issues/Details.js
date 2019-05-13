import React from "react";
import axios from "axios";
import EditIssue from './Edit'
import CommList from '../Comments/CommList'

class IssueDetails extends React.Component {
  state = {
    title: "",
    description: "",
    comments: "",
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
      
      render() {
        const {_id, title, description, comments, user} = this.state
      let editBlock = <></>;

    if (this.props.user && this.props.user._id === user) {
      editBlock = (
        <div>
          <EditIssue  id={_id} issueDetails={this.getIssue} />
          
        </div>
      );
    }
      
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
          {console.log(this.state._id)}
        <CommList issueId={this.state._id} clicked={this.handleClick} />
        {comments && comments.map(comment => {
                  return(
                    <div key={comment._id} >
                      {comment.content}
                    </div>
                  )
                })}
        </div>
        <div>
        <div>
                
              </div>
                {/* {issue.comments && issue.comments.map(el => {
                  return(
                    <div key={el._id} >
                      {el.content}
                    </div>
                  )
                })} */}
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
