import React from "react";

export default function Conversation({ currentConvo, back }) {
    if (!currentConvo) {
        return <div>No conversation selected.</div>;
    }

    const senderName = currentConvo.with;
    const messages = currentConvo.convo;

    return (
        <div>
            <h2>Conversation with {senderName}</h2>
            <button onClick={back}>Back</button>
            {messages.map((message, index) => (
                <div key={index} className="message">
                    <span className={`sender ${message.sender}`}>
                        {message.sender === "self" ? "Me" : senderName}
                    </span>
                    : "{message.text}"
                </div>
            ))}
        </div>
    );
}
