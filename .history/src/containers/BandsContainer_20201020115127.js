import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  
  render() {
    console.log(this.props)
    return(
      <div>
        BandsContainer
      </div>
    )
  }
}

export default connect()(BandsContainer)
