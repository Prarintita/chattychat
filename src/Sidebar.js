import React from 'react'

const Sidebar = () => {
    return (
        <aside className="Sidebar" style={styles.sidebar}>
        <div className="UserInfo">
            <div className="Avatar"></div>
            <div className="user">{props.user.displayName}</div>
            <a href="#">
            <i className="fas fa-sign-out-alt"></i>
            </a>
        </div>
        <h1>XTBC 18</h1>
        <nav className="RoomList">
            <h2>Rooms</h2>
            <ul>
            <li><a href="#">general</a></li>
            <li><a href="#">random</a></li>
            </ul>
        </nav>
        </aside>
    )
}

const styles = {
    sidebar: {
        backgroundColor: '#333344',
        color: 'rgba(255, 255, 255, 0.8)',
        width: '12rem',
        padding: '1rem 0',
        display: 'flex',
        flexDirection: 'column',
    },

    children: {

    },

    h1: {

    },
}

export default Sidebar