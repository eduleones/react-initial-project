import React, { Component } from 'react';
import Contacts from './components/Contacts';
import './App.css';

const BACKEND_TOKEN = 'efed65f76270352a3bfbaf406644c8bb037a6f52'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }
  
  componentDidMount() {
    fetch('http://127.0.0.1:8000/shoes/?token='+BACKEND_TOKEN)
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data.data })
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