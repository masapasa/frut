import React from "react";
import { signup, upload, githubAuth } from "../../services/auth";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
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
        imgPath: ""
      })
      this.props.history.push('/profile')
    });
  };
  handleUpload = event => {
    const file = event.target.files[0];
    const data = new FormData();
    data.append("imgPath", file);
    upload(data).then(response => {
      this.setState({ imgPath: response.imgPath });
    });
  }

  githubLogin = () => {
    githubAuth().then(res => (
      console.log("success")
    )).catch(err => (
      console.log("error")
    ))
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
            <input type="file" name="imgPath" onChange={this.handleUpload} />
          </div>
          <input type="submit" value="signup" />
        </form>
        <a href="http://localhost:5000/api/github" >Github login </a>
      </div >
    );
  }
}

export default Signup;
