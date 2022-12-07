import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../Header.css';

class Header extends Component {
  state = {
    character: '',
  }
  render() {
    const { dispatch } = this.props;
    const { character } = this.state;
    return (
      <div className='header-container'>
        <div className='container'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Game_of_Thrones_2011_logo.svg/797px-Game_of_Thrones_2011_logo.svg.png' alt='Logo Game Of Thrones' />
        </div>
        <div className='search-container'>
          <input 
              type='text'
              placeholder='Nome Do Personagem'
              onChange={ ({ target }) => this.setState({ character: target.value }) }
              value={ character }
          />
          <button 
            type="button"
            onClick={ () => dispatch({type: 'SEARCH', payload: character})}
          >
            Buscar
          </button>
        </div>
      </div>
    )
  }
}
export default connect()(Header);

