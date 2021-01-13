import React, { useState } from 'react';

const ChatInput = (props) => {
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const isUserProvided = user && user !== '';
        const isMessageProvided = message && message !== '';

        if (isUserProvided && isMessageProvided) {
            props.sendMessage(user, message);
        } 
        else {
            alert('Please insert an user and a message.');
        }
    }

    const onUserUpdate = (e) => {
        setUser(e.target.value);
    }

    const onMessageUpdate = (e) => {
        setMessage(e.target.value);
    }

    return (
        <form 
            onSubmit={onSubmit}>
            
            <div className='mb-3'>
            <label className="form-label" htmlFor="user">User:</label>
            <input 
                id="user" 
                name="user" 
                className="form-control"
                value={user}
                onChange={onUserUpdate} />
            </div>
            <div className='mb-3'>
            <label className="form-label" htmlFor="message">Message:</label>
            <input 
                type="text"
                id="message"
                className="form-control"
                name="message" 
                value={message}
                onChange={onMessageUpdate} />
            </div>
            
            <button className="btn btn-primary">Submit</button>
        </form>
    )
};

export default ChatInput;