import React from "react";
import axios from "axios";

class IssueDetails extends React.Component {
  state = {
    title: "",
    description: "",
    comments: ""
  };

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
          description: response.data.description,
          comments: response.data.comments
        });
      });
    }
    
    render() {
      const {title, description, comments} = this.state
      console.log(comments)
    return (
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        {/* <p>{comments.map(el => el.content)}</p> */}
          {/* {console.log(comments.map(el => el.content))} */}
        <div>
        {comments && comments.map(el => {
                  return(
                    <div key={el._id} >
                      {el.content}
                    </div>
                  )
                })}
        </div>
      </div>
    );
  }
}

export default IssueDetails;
