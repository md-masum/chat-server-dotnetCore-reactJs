import React from 'react';

const Message = (props) => (
    <div className="card mb-2">
        <div className="card-body">
        <p><strong>{props.user}</strong> says:</p>
        <p>{props.message}</p>
        </div>
    </div>
);

export default Message;