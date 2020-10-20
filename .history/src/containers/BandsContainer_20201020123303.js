import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
import bands from '../reducers/manageBand'

class BandsContainer extends Component {
  
  render() {
    // console.log(this.props)
    const {bands, dispatch} = this.props;
    return(
      <div>
        <BandInput addBand={dispatch } />
        {bands.map(band=>{
          <p>{band}</p>
        })}
      </div>
    )
  }
}

const mapStateToProps= state => {
  return{bands: state.bands}
}
// const addDispatchToProps=dispatch=>{
//   addBand: dispatch(addBand)
// }

export default connect(mapStateToProps)(BandsContainer)
