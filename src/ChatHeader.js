import React from 'react'

//class ChatHeader extends Component {
const ChatHeader = () => { //a function that returns jsx
//    render() {
        return (
            <header className="ChatHeader" style={styles.header}>
                <div className="roomInfo">
                    <h2 style={styles.h2}>#general</h2>
                    <p style={styles.p}>Announcements and general chat</p>
                </div>
            </header>
        )
//    }
}

const styles = {
    header: {
        backgroundColor: '#f3f3f3',
        borderBottom: '1px solid #ccc',
        padding: '0.5rem 1rem',
        display: 'flex',
        alignItems: 'center',
    },

    h2: {
        fontSize: '1.1rem',
        margin: '0',
    },

    p: {
        color: '#999',
        margin: '0',
        fontSize: '0.8rem',
    }
}

export default ChatHeader