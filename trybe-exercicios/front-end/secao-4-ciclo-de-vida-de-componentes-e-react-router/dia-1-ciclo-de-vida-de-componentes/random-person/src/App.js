import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      person: {},
    }
  }

  fetchApi = async () => {
    this.setState(
      { loading: true }, 
      async () => {
        const responseRequest = await fetch('https://api.randomuser.me/')
        const responseObj = await responseRequest.json()
        console.log(responseObj)
        this.setState({
          loading: false,
          person: responseObj,
      }
    )
  })
}

  componentDidMount () {
    this.fetchApi()
  }

  shouldComponentUpdate(_nextProps, nextState) {
    // const { person } = this.state;
    const age = nextState.person[0].dob.age
    if (age > true) return true 
  }

  render() {
    const { loading, person } = this.state;
    return (
      <div>
        {loading 
        ? <div>Carregando...</div> 
        : <div>
          <img src={person.results[0].picture.thumbnail} alt={person.results[0].name.first} />
         <p>{person.results[0].name.first}</p>
         <p>{person.results[0].email}</p>
         <p>{person.results[0].dob.age}</p>
        </div>
      }
      </div>
    )
  }
}
export default App;