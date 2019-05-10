import React from "react";
import axios from "axios";
import EditIssue from './Edit'

class IssueDetails extends React.Component {
  state = {
    title: "",
    description: "",
    comments: "",
    _id: ""
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
        {comments && comments.map(el => {
                  return(
                    <div key={el._id} >
                      {el.content}
                    </div>
                  )
                })}
        </div>
        <div>
        {editBlock}
        </div>
      </div>
    );
  }
}

export default IssueDetails;
