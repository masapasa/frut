import React from "react";
import { getUsers } from "../../services/auth";

class Invitation extends React.Component {
  state = {

    users: []
   
  }
  componentDidMount() {
    this.inviteUsers()
  }
  inviteUsers = () => {
    getUsers().then(response =>{
        this.setState({
          users: response
        })
      })
    }

  render() {
    const users = this.state.users
    return (
    <React.Fragment>
      {users.map(user=> <a href={`mailto:${user.email}`}>
      <div key={user._id} >{user.username}</div>
      </a>)}</React.Fragment>
  )
  }};

export default Invitation;