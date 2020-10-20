// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      band: ''
    }

  }

  handleChange=event=>{
    this.setState({
      band: event.target.value
    })
  }

 

  handleSubmit=event=>{
    event.preventDefault();
    this.props.addBand(this.state.band)
    this.setState({
      band: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='band'>Band:</label>
          <input type='text' onChange={this.handleChange} value={this.state.text}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput 