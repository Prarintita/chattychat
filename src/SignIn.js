import React, { Component } from 'react'

import Main from './Main'

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: "",
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event) {
        this.setState({value: event.target.value})
    }
    
    handleSubmit(event) {
        event.preventDefault();

        //go to main page?
        <Main user={this.state.value} /> 
    }
    
    render() {
        return(
            <div>
            <h1 style={styles.h1}>Welcome!</h1>
            <form onSubmit={this.handleSubmit} style={styles.form} >
                <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Username or email"/>
                <input type="submit" value="Log In" style={styles.button} />
            </form> 
            </div>
        )
    }
}

const styles = {
    h1: {
        alignItems: 'center',
        color: 'green',
    },

    form: {
        alignItems: 'center',
    },

    button: {
        fontSize: '1rem',
        backgroundColor: '#1A8FE3',
        color: 'white',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        borderTopRightRadius: '0.5rem',
        borderBottomRightRadius: '0.5rem',
        border: '1px solid white',
    },
}

export default SignIn