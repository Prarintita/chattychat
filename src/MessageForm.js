import React, {Component} from 'react'

class MessageForm extends Component {
    state = {
        body: '',
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addMessage(this.state.body)
    }

    handleChange = (event) => {
        this.setState({body: event.target.value})
    }

    render() {
        return (
            <form className="MessageForm" onSubmit={this.handleSubmit}>
                <input 
                    autoFocus
                    required
                    type="text"
                    name="body"
                    placeholder="Type a message..."
                    value={this.state.body}
                    onChange={this.handleChange}
                />
                <button type="submit">
                    Send
                </button>
            </form>
        )
    }
}

export default MessageForm