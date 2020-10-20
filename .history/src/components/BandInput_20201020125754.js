// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {
  
  state = {
    band: ""
  }

  handleChange=event=>{
    const {name,value} = event.target;
    this.setState({
      [name]:value
    })
  }

  addBand=band=>{
    type: 'ADD_BAND',
    band
  }

  handleSubmit=event=>{
    event.preventDefault();
    this.props.dispatch(this.addBand(this.state.band))
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
