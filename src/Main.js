import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {
    state = {
        room: {
            name: 's3afternoon',
            desc: 'Ask questions and share code',
        },

        rooms: {
            s3afternoon: {
                name: 's3afternoon',
                desc: 'Ask questions and share code',
            },

            general: {
                name: 'general',
                desc: 'Chat about whatever',
            },

            random: {
                name: 'random',
                desc: 'cat GIFS, etc.',
            },
        },
    }

    setCurrentRoom = roomName => {
        const room = {this.state.rooms[roomName]} 
        this.setState({room})
    }

    render() {
        return (
            <div className="Main" style={styles}>
                <Sidebar user={this.props.user} signOut={this.props.signOut} rooms={this.state.rooms} />
                <Chat user={this.props.user} room={this.state.room} />
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