import React, { Component } from 'react'

import Main from './Main'
import SignIn from './SignIn'

function Opening(props) {
    const isLoggedIn = props.isLoggedIn
    if (isLoggedIn) {
      return <Main user={this.state.user} />
    }
    return <SignIn />
}

export default Opening