import React from "react";
import { signup, upload } from "../../services/auth";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    email:"",
    imgPath: ""
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password, email, imgPath } = this.state;

    signup(username, password, email, imgPath).then(user => {
      this.props.setUser(user);
      this.setState({
        username: "",
        password: "",
        email: "",
        imgPath:""
      });
    });
  };
  handleUpload = event => {
    const file = event.target.files[0];
    console.log(file)
    const data = new FormData();
    data.append("imgPath", file);
    upload(data).then(response => {
      this.setState({ imgPath: response.secure_url });

    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>username: </label>
            <input
              value={this.state.username}
              onChange={this.handleChange}
              type="text"
              name="username"
            />
          </div>
          <div>
            <label>password: </label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
            />
          </div>
          <div>
            <label>email: </label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
              name="email"
            />
          </div>
          <div><label>Photo</label>
            <input type="file" name="photo" onChange={this.handleUpload} />
          </div>
          <input type="submit" value="signup" />
        </form>
      </div>
    );
  }
}

export default Signup;
