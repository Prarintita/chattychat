import React from 'react'

import Message from './Message'

const MessageList = ({messages, room}) => {
    return (
        <div className="MessageList" style={styles.messageList}>
            <div style={styles.roomAnnouncement}>
                <h3 style={styles.roomAnnouncementh3}>#{room.name}</h3>
                <p>{room.desc}</p>
            </div>

            {
                messages.map(msg => 
                (<Message message={msg} key={msg.id} />)
                )
            }
        </div>
    )
}

const styles = {
    messageList: {
        backgroundColor: 'white',
        flex: '1',
        paddingBottom: '1rem',
        overflowY: 'scroll',
    },

    roomAnnouncement: {
        padding: '2rem 1rem',
    },

    roomAnnouncementh3: {
        fontSize: '1.5rem',
    }
}

export default MessageList