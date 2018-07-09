import React from 'react'

import Message from './Message'

const MessageList = (props) => {
    return (
        <div className="MessageList" style={styles.messageList}>
            <div style={styles.roomAnnouncement}>
                <h3 style={styles.roomAnnouncementh3}>{this.props.room.name}</h3>
                <p>{this.props.room.desc}</p>
            </div>

            {
                props.messages.map(msg => 
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