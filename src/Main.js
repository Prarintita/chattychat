import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {
    render() {
        return (
            <div className="Main" style={styles}>
                <Sidebar />
                <Chat />
            </div>
        )
    }
}

const styles = {
    //put css rules here
    display: 'flex',
    alignItems: 'stretch', //full height of container
    height: '100vh', //entire height of window
}

export default Main