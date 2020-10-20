// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      name: ""
    }

  }

  handleChange=event=>{
    this.setState({
      name: event.target.value
    })
  }

 

  handleSubmit=event=>{
    event.preventDefault();
    console.log(this.state.name)
    this.props.addBand(this.state.name)
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name="name" onChange={this.handleChange} value={this.state.name}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput 