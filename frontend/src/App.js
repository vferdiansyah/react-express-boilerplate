import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: ''
    };
  }

  componentDidMount() {
    fetch('http://localhost:1337/api/users')
      .then(res => {
        return res.json();
      })
      .then(jsonRes => {
        this.setState({
          fullName: jsonRes.data.fullName
        });
      });
  }

  render() {
    const { fullName } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello, {fullName}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
