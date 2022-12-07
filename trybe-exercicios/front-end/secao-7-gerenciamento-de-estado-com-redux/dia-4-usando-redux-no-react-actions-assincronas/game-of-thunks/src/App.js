import React, { Component } from 'react'
import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header';
import { fetchCharacters } from './redux/actions';
class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCharacters())
  }

  render() {
    const { characters, search } = this.props;
    const { fullName, title, family, imageUrl } = characters.find(character => character.fullName.toLowerCase().includes(search.toLowerCase())) || {}
    return (
      <div className='tudo'>
        <Header className='header' />
        <h2>Personagem:</h2>
        <br />
        <div className='personagem-container'>
          <div className='text-container'>
            <p>Nome: { fullName }</p>
            <p>Título: { title }</p>
            <p>Família: { family }</p>
          </div>
          <div className='image-container'>
            <img className='image' src={imageUrl} alt={`Personagem ${fullName}`} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
	characters: state.characters,
  search: state.search,
});

export default connect(mapStateToProps)(App);
