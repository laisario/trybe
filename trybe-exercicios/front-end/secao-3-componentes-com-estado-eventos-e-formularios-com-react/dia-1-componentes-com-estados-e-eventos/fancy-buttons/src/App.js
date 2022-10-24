import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick1 = this.handleClick1.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    // posso acesar o estado assim
    // this.state = {
    //   numeroDeCliques: 0,
    //   numeroDeCliques1: 0,
    //   numeroDeCliques2: 0,
    // };
  }
  // ou assim 
  state = {
    numeroDeCliques: 0,
    numeroDeCliques1: 0,
    numeroDeCliques2: 0,
  }
  handleClick1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }
  handleClick2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1,
    }));
  }
  handleClick3 = () => {
    this.setState((estadoAnterior) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1,
    }))
  };
  
  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>{this.state.numeroDeCliques}</button>
        <button onClick={this.handleClick2}>{this.state.numeroDeCliques1}</button>
        <button onClick={this.handleClick3}>{this.state.numeroDeCliques2}</button>
      </div>
    )
  }
}

export default App;
