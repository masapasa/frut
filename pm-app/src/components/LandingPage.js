import React, { Component } from 'react'
import landimg from '../Images/image.png'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <img src={landimg} alt="landing"/>
      </div>
    )
  }
}
