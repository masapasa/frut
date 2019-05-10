import React from "react";
import axios from "axios";

class AddProject extends React.Component {
  state = {
    title: "",
    description: ""
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post(
        "http://localhost:5000/api/projects",
        {
          title: this.state.title,
          description: this.state.description
        },
        { withCredentials: true }
      )
      .then(() => {
        this.props.getData();
        this.setState({ title: "", description: "" });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
            value="Create Project"
          />
        </form>
      </div>
    );
  }
}

export default AddProject;
