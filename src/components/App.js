
import React, { Component } from 'react';
 
class App extends Component {
  state = {
    input : '',
    valid  : false,
  }
  handleInput(){
    console.log('you wrote ',this.state.input)
  }

  render() { 
    return (
      <div>
        {this.state.valid?'Valid Passowrd!' : "Invalid Password"}
       <input type="text" value = {this.state.input }onChange={(e)=>{
         const value = e.target.value;
         let valid;
         if(value.length>=8 && value.replace(/[^A-Z]/g,'').length>=1){
           valid  = true ;
         }
         else {
           valid = false;
         }
         this.setState({
           input :value,
           valid:valid,
         })
        //  this.setState({
        //    input : e.target.value.toUpperCase()
        //  })
       }} ref={input => (this.inputField = input)}></input>
       <button onClick= {this.handleInput.bind(this)}>Submit</button>
      </div>
    );
  }
}
 
export default App;