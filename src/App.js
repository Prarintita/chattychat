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
        uid: 'ldlldlsls',
        displayName: 'madjw',
        email: 'mjawhdaw@meme.com',
      },
    }
  }



  render() {
    return (
      <div className="App">
        <Opening />
      </div>
    );
  }
}

export default App;
