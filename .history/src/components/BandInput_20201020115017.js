// Add BandInput component
import React, { Component } from 'react';
// import { connect } from 'react-redux';

class BandInput extends Component {
  
  state = {
    text: ""
  }

  handleChange=event=>{
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit=event=>{
    
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange} value={this.state.text}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

// const addDispatchToProps=dispatch=>{
//   addBand: dispatch(addBand)
// }


export default BandInput //connect()(BandInput)
