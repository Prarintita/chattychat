import React, { Component } from 'react'

import Main from './Main'

class SignIn extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         value: "",
    //     }

    //     this.handleChange = this.handleChange.bind(this)
    //     this.handleSubmit = this.handleSubmit.bind(this)
    // }
    
    handleChange = (event) => {
        this.setState({email: event.target.value})
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleAuth({
            uid: `${this.state.email}-asdf`,
            email: this.state.email,
            displayName: this.state.email,
        })
    }
    
    state = {
        email: '',
    }

    render() {
        return(
            <div className="SignIn">
                <h1 style={styles.h1}>Welcome!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={this.state.emaile} 
                        onChange={this.handleChange} 
                        placeholder="Username or email" 
                        required 
                        autoFocus 
                    />
                <button type="submit">Sign In</button>
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