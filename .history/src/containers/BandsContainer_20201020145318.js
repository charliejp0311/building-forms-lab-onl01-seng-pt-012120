import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.state.bands.map(band=><li>{band.band}</li>)}
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
const mapStateToProps= state => {
  return{state: state}
}
const addDispatchToProps=dispatch=>{
  return{
    addBand: (band) => dispatch(addBand(band))
  }
}

export default connect(mapStateToProps, addDispatchToProps)(BandsContainer)
