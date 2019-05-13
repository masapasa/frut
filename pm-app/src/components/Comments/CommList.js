import React from "react";
import axios from "axios";

class CommList extends React.Component {
  state = {
    content: "",
    displayForm: false,
    issueId:this.props.issueId
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  componentDidUpdate(prevState){
    if(prevState.issueId !== this.props.issueId){
      this.setState({issueId:this.props.issueId})
    }
  }

  handleSubmit = event => {
    event.preventDefault();
  
    axios
      .post(
        "http://localhost:5000/api/comments",
        {
          content: this.state.content,
          issueId: this.state.issueId,
        },
        { withCredentials: true }
      )
      .then(() => {
        this.setState({ content: "", displayForm: false });
       
      });

  };

  toggleForm = () => {
    this.setState({
      displayForm: !this.state.displayForm
    });
  };

  render() {
    return (
      <div>
        <hr />
        <button className="btn" onClick={this.toggleForm}>
          Add Comment
        </button>
        {this.state.displayForm && (
          <div>
            <h3>Add Comment</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>content:</label>
                <input
                  className="form-control"
                  value={this.state.content}
                  onChange={this.handleChange}
                  name="content"
                  type="text"
                />
              </div>
              
              <input
                className="btn btn-primary"
                type="submit"
                value="Create Comment"
              />
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default CommList
;
