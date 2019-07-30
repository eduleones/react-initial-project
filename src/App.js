import React, { Component } from 'react';
import Contacts from './components/Contacts';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
  }
  render() {
    return (
      <Contacts contacts={this.state.contacts} />
    )
  }

}

export default App;