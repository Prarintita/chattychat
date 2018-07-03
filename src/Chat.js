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

    addMessage = (body) => {
        const messages = [...this.state.messages] //made copy of new array
        const user = {
            uid: 'fjdfjgnsd',
                displayName: 'FFFFF',
                email: 'fffff@meme.com',
        }

        messages.push({
            id: Date.now(),
            user,
            body: body, //passed in argument
        })

        //update state with changes
        this.setState({messages: messages})
    }

    render() {
        return (
            <div className="Chat">
                <ChatHeader />
                <MessageList messages={this.state.messages}/>
                <MessageForm addMessage={this.addMessage} />
            </div>
        )
    }
}

export default Chat