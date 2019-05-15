import React from "react";
import { getUsers } from "../../services/auth";
import ContactForm from '../ContactForm'

class Invitation extends React.Component {
  state = {

    users: [],
    // contactBlock: false
   
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
    // showContactForm = () => {

    // }

  render() {
    const users = this.state.users
    // let contactBlock = <></>
    // if (user && user._id === this.props.project.user) {
 
    return (
    <div className="invite-btn">
      {users.map(user => 
         <div key={user._id} >
           
           <ContactForm user={user} />
         </div>
        )}
        <div>
          </div>
      </div>
  )
  }};

export default Invitation;
