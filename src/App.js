import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    number: 0    
  };

  handleAdd = (e)=>{
    this.setState({
      number:this.state.number + 1
    })
  }//end of handleAdd

  handleMinus = (e)=>{
    this.setState({
      number: this.state.number - 1
    })
  }

  handleBoth = (e) => {
    if (e.target.innerText === "+"){
      this.setState({
        number:this.state.number + 1
      })
    } 
    else if (e.target.innerText === "-"){
      this.setState({
        number: this.state.number - 1
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>The current number is {this.state.number}</h1>
        <h2 onClick={this.handleBoth}>+</h2>
        <h2 onClick={this.handleBoth}>-</h2>
      </div>
    );
  }

}

export default App;
