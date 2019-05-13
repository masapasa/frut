import React from "react";
import axios from "axios";

class EditIssue extends React.Component {
  state = {
    title: "",
    description: "",
    displayForm: false
  };

  handleSubmit = event => {
    event.preventDefault();

    const id = this.props.id
    axios
      .put(
        `http://localhost:5000/api/issues/${id}`,
        {
          title: this.state.title,
          description: this.state.description
        }, 
        { withCredentials: true }
      )
      .then(() => {
        this.props.issueDetails()
        this.props.clicked()
      });
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
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
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label>title:</label>
            <input
              className="form-control"
              value={this.state.title}
              onChange={this.handleChange}
              name="title"
              type="text"
            />
          </div>
          <div className="form-group">
            <label>description:</label>
            <input
              className="form-control"
              value={this.state.description}
              onChange={this.handleChange}
              type="text"
              name="description"
            />
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Update issue"
          />
        </form>
      </div>
    );
  }
}

export default EditIssue;