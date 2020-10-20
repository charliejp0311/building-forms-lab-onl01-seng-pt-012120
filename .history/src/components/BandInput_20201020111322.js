// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  
  state = {
    text: ''
  }

  handleChange=event=>{
    this.setState{
      text: event.target.value
    }
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

export default BandInput
