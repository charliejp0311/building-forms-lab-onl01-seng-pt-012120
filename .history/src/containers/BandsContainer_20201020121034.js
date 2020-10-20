import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  
  render() {
    // console.log(this.props)
    return(
      <div>
        <BandInput addBand={this.props.dispatch } />
      </div>
    )
  }
}

// const addDispatchToProps=dispatch=>{
//   addBand: dispatch(addBand)
// }

export default connect()(BandsContainer)
