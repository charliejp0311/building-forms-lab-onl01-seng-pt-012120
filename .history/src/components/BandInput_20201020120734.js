// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {
  
  state = {
    band: ""
  }

  handleChange=event=>{
    this.setState({
      band: event.target.value
    })
  }

  addBand=band=>{
    type: 'ADD_BAND',
    band
  }

  handleSubmit=event=>{
    event.preventDefault();
    this.addBand(this.state.text)
    this.setState({
      band: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='band' onChange={this.handleChange} value={this.state.text}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}




export default BandInput //connect()(BandInput)
