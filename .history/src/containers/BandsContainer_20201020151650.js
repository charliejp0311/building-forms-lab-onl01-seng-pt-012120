import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.props.state.bands.map( b => <li>{b}</li> )}
      </div>
    );
  }
};

const addBand=(band)=>{
  return{
    type: 'ADD_BAND',
    band,
  };
};

const addDispatchToProps = dispatch =>{
  return{
    addBand: (band) => dispatch(addBand(band))
  };
};

const mapStateToProps = state => {
  return{state: state};
};

export default connect(mapStateToProps, addDispatchToProps)(BandsContainer)
