import React, {Component} from 'react';
import './App.css';

import KeyPadComponent from './components/KeyPadComponent';
import ResultComponent from './components/ResultComponent';

class App extends Component {
  constructor(){
    super();

    this.state = {
      result: ''
    }
  }

  buttonHandler = (button) => {
    if(button === '='){
      //execute a function
      this.calculate()
    }else if(button === 'C'){
      //exec a reset
      this.reset()
    }else if(button === 'CE'){
      //exec a backspace
      this.backspace()
    }else{
      this.state({
        result: this.state.result + button
      })
    }
  }

  calculate = () => {
    let checkResult = ''
    let {result} = this.state;

    if(result.includes('--')){
      checkResult = result.replace('--', '+')
    }else{
      checkResult = result;
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      })
    } catch (error) {
      this.setState({
        result: "error"
      })
    }
  }

  reset = () => {
    this.setState({
      result: ''
    })
  }

  backspace = () => {
    this.setState({
      result: this.state.result.splice(0, -1)
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Simple Calculator</h1>
        <ResultComponent resultAttrib={this.state.result} />
        <KeyPadComponent clickHandler={this.buttonHandler} />
      </div>
    );
  }
}

export default App;
