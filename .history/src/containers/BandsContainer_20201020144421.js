import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  
  render() {
    // console.log(this.props)
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.state.bands.map(band=><li>{band.band}</li>)}
      </div>
    )
  }
}

const mapStateToProps= state => {
  return{state: state}
}
const addDispatchToProps=dispatch=>{
  addBand: (band) => dispatch(addBand(band))
}

export default connect(mapStateToProps, addDispatchToProps)(BandsContainer)
