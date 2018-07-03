import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
    constructor() {
        super()

        this.state = {
            messages: [
                {
                    id: 1, 
                    user: {
                        uid: 'skadnwjndaj', 
                        displayName: 'Ada', 
                        email: 'ada@haha.com',
                        },
                    body: 'chatchat',
                },
        
                {
                    id: 2,
                    user: {
                        uid: 'ajdwnadaw',
                        displayName: 'Seeek',
                        email: 'seek@kaka.com',
                    },
                    body: 'This is great!',
                },
            ]
        
        }
    }
    render() {
        return (
            <div className="Chat">
                <ChatHeader />
                <MessageList messages={this.state.messages}/>
                <MessageForm />
            </div>
        )
    }
}

export default Chat