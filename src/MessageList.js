import React from 'react'

import Message from './Message'

const MessageList = () => {
    const messages = [
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

    return (
        <div className="MessageList">
            {
                messages.map(msg => 
                    <Message message={msg} key={msg.id} />    
                )
            }
        </div>
    )
}

export default MessageList