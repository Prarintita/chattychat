import React, { Component } from 'react'

const Avatar = ( {user}) => {
    const imgURL = user.photoUrl || `https://api.adorable.io/avatars/40/{props.user.email}.io.png`

    return (
        <div 
            className="Avatar"
            style={{
                ...styles,
                backgroundImage: `url(${imgURL})`,
            }}
            ></div>
    )
}

const styles = {
    marginRight: '0.5rem',
    height: '40px',
    width: '40px',
    fontSize: '1rem',
    borderRadius: '20px',
    backgroundSize: '40px 40px',
  }

export default Avatar