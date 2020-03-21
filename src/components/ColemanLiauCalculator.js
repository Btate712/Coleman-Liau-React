import React from 'react';
import { colemanLiauIndex } from '../ColemanLiau';

class ColemanLiauCalculator extends React.Component {
  state = {
    input: "",
    buttonPressed: false
  }

  inputChanged = (event) => {
    this.setState({
      buttonPressed: false,
      [event.target.name]: event.target.value
    })
  }

  calculate = (event) => {
    event.preventDefault();
    this.setState({
      buttonPressed: true
    });
  }

  render() {
    return(
      <>
        <h1>Coleman-Liau Index Calculator</h1>
        <h3>Please enter the passage you'd like to evaluate...</h3>
        <textarea cols="55" rows="10" name="input" value={this.state.input} onChange={this.inputChanged} />
        <br />
        <button onClick={this.calculate} >Calculate Coleman-Liau Index</button>
        {this.state.buttonPressed ? <h3>Index: {colemanLiauIndex(this.state.input)}</h3> : <></>}
      </>
    );
  }
}

export default ColemanLiauCalculator;