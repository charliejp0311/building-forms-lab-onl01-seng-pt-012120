import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  
  render() {
    console.log(this.props.addBand)
    return(
      <div>
        BandsContainer
      </div>
    )
  }
}

const addDispatchToProps=dispatch=>{
  addBand: dispatch(addBand)
}

export default connect()(BandsContainer)
