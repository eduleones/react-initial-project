import React, { Component } from 'react';
import Contacts from './components/Contacts';
import './App.css';


const url = 'https://reqres.in/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      users: [],
      userId: ''
    };
  }

  handleusers = (identifier) => {
    return (
      fetch(`${url}/users/${identifier}`)
        .then(res => res.json())
        .then((data) => {
          this.setState({ 
            users: data.data
          })
        })
        .catch(console.log)
    )
  }

  componentDidMount() {
    fetch(`${url}/users/`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data.data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <Contacts
        contacts={this.state.contacts}
        users={this.handleusers}
        userId= {this.state.users}
      />
    )
  }
}

export default App;