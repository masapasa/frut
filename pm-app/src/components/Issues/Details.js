import React from "react";
import axios from "axios";

class IssueDetails extends React.Component {
  state = {};
  getissue = () => {
    
  }

  componentDidMount() {
    const issueId = this.props.match.params.issueId;

    axios
      .get(`http://localhost:5000/api/issues/${issueId}`, {
        withCredentials: true
      })
      .then(response => {
        //   this.setState(response.data);

        this.setState({
          title: response.data.title,
          description: response.data.description
        });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
      </div>
    );
  }
}

export default IssueDetails;
