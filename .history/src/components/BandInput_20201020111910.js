// Add BandInput component
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandInput extends Component {
  
  state = {
    text: ""
  }

  handleChange=event=>{
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form>
          <input type='text' onChange={this.handleChange}></input>
        </form>
      </div>
    )
  }
}

const addDispatchToProps=dispatch=>{
  addBand: dispatch(addBand)
}


export default connect(null,addDispatchToProps)(BandInput)
