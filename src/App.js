import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import SignIn from './SignIn'
import Opening from './Opening'

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: {
        
      },
    }
  }

  handleAuth = (user) => {
    this.setState({user: user})
  }

  render() {
    return (
      <div className="App">
        <SignIn handleAuth={this.handleAuth} />
      </div>
    );
  }
}

export default App;
