import React, { Component } from 'react'

export default class App extends Component {
  state = {
    selectFlavor: '',
    userEmail: '',
    userAge: 0,
    userOpinion: '',
    gayUser: false,
  }
  handleChange = ({ target }) => {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <form>
        <label>
          Select your favorite flavor
          <select name="selectFlavor" value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br />
        <label>
          Seu email:
          <input type="email" name="userEmail" onChange={this.handleChange}></input>
        </label>
        <br />
        <label>
          Sua idade:
          <input type="number" name="userAge" onChange={this.handleChange}></input>
        </label>
        <br />
        <label>
          Sua opinião
        <textarea name="userOpinion" onChange={this.handleChange}></textarea>
        </label>
        <br />
        <p>Você é gay?</p>
        <label>
          Sim, sou gay
          <input type="checkbox" name="gayUser" onChange={this.handleChange}></input>
        </label>
      </form>
        )
  }
}
