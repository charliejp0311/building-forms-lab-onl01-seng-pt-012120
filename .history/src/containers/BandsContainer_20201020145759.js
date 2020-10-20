import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  
  render() {
    console.log(this.props)
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.state}
      </div>
    )
  }
}
const addBand=(band)=>{
  return{
    type: 'ADD_BAND',
    band
  }
}
const mapStateToProps = state => {
  return{state: state}
}
const addDispatchToProps = dispatch =>{
  return{
    addBand: (band) => dispatch(addBand(band))
  }
}

export default connect(mapStateToProps, addDispatchToProps)(BandsContainer)
