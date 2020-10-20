import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.props.state.bands.map( b => <li>{b.name}</li> )}
      </div>
    );
  }
};

const addBand=(name)=>{
  return{
    type: "ADD_BAND",
    name,
  };
};

const addDispatchToProps = dispatch =>{
  return{
    addBand: (name) => dispatch(addBand(name))
  };
};

const mapStateToProps = state => {
  return{state: state};
};

export default connect(mapStateToProps, addDispatchToProps)(BandsContainer)
