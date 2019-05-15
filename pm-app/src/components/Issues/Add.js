import React from "react";
import axios from "axios";

class AddIssue extends React.Component {
  state = {
    title: "",
    description: "",
    type: "",
    status: "",
    priority: "",
    severity: "",
    displayForm: false
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const project = this.props.project._id;
    axios
      .post(
        (process.env.HEROKU_URL || "http://localhost:5000") + "/api/issues",
        {
          title: this.state.title,
          description: this.state.description,
          type: this.state.type,
          status: this.state.status,
          priority: this.state.priority,
          severity: this.state.severity,
          project
        },
        { withCredentials: true }
      )
      .then(() => {
        this.props.getProject();
        this.setState({ title: "", description: "", type: "", status: "", priority: "", severity: "", displayForm: false });
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
        <button className="btn btn-primary" onClick={this.toggleForm}>
          Add Issue
        </button>
        {this.state.displayForm && (
          <div>
            <h3>Add Issue</h3>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>title:</label>
                <input
                  value={this.state.title}
                  onChange={this.handleChange}
                  name="title"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>description:</label>
                <input
                  value={this.state.description}
                  onChange={this.handleChange}
                  type="text"
                  name="description"
                />
              </div>
              <div>
                <label>type</label>
                <select name="type" onChange={this.handleChange}>
                  <option value="bug/issue">bug/issue</option>
                  <option value="enhancement">enhancement</option>
                  <option value="feature">feature</option>
                  <option value="documentation">documentation</option>
                </select></div>
              <div>
                <label>status</label>
                <select name="status" onChange={this.handleChange}>
                  <option value="open">open</option>
                  <option value="assigned">assigned</option>
                  <option value="duplicated">duplicated</option>
                  <option value="closed">closed</option>
                  <option value="pending review'">pending review'</option>
                </select></div>
              <div>
                <label>priority</label>
                <select name="priority" onChange={this.handleChange}>
                  <option value="immediate">immediate</option>
                  <option value="high">high</option>
                  <option value="medium">medium</option>
                  <option value="low">low</option>
                </select></div>
              <div>
                <label>severity</label>
                <select name="severity" onChange={this.handleChange}>
                  <option value="critical">critical</option>
                  <option value="major">major</option>
                  <option value="minor">minor</option>
                  <option value="low-impact">low-impact</option>
                </select></div>
              <input
                className="btn btn-primary"
                type="submit"
                value="Create Issue"
              />
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default AddIssue;
