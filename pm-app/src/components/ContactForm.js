import React, { Component } from 'react'
import axios from 'axios'

export default class Email extends Component {
  state = {
    email: '',
    subject: '',
    message: '',
    display: false
  }

  handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let emailObj = {

      email: this.props.user.email,
      subject: this.state.subject,
      message: this.state.message
    }
    axios.post((process.env.REACT_APP_HEROKU_URL || "http://localhost:5000") + '/api/send-email', emailObj, { withCredentials: true }).then(() => { console.log("done") })
  }
  handleClick = () => {
    this.setState({ display: !this.state.display })
  }

  render() {
    return (
      <div>
        {this.props.user && <div >
          <button
            className="btn btn-danger mx-2 my-2" onClick={this.handleClick}>{this.props.user.username}</button></div>}
        {this.props.user && this.state.display && <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">email</label>
            <input type="text" name="email" onChange={(e) => this.handleChange(e)} value={this.props.user.email} />
          </div>
          <div>
            <label htmlFor="">subject</label>
            <input type="text" name="subject" onChange={(e) => this.handleChange(e)} />
          </div>
          <div>
            <label htmlFor="">message</label>
            <textarea name="message" id="" cols="30" rows="10" onChange={(e) => this.handleChange(e)}></textarea>
          </div>
          <button>submit</button>
        </form>}


      </div>
    )
  }
}