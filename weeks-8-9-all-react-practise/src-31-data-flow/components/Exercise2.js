import React, { useState } from "react";
import List from "./List";
import Conversation from "./Conversation";

export default function ExerciseTwo() {

    const[chat, setChat] = useState({
    displayConversation: null,
    conversations: [
        {
            with: "Laura", convo: [
                { text: "Hi", sender: "self" },
                { text: "You there?", sender: "self" },
                { text: "Yeah, hi, what's up?", sender: "other" }
            ]
        },
        {
            with: "Dad", convo: [
                { text: "Have you finished your school work yet?", sender: "other" },
                { text: "Yes.", sender: "self" },
                { text: "What do you mean, yes?", sender: "other" },
                { text: "??", sender: "self" }
            ]
        },
        {
            with: "Shoobert", convo: [
                { text: "Shoobert!!!", sender: "self" },
                { text: "Dude!!!!!!!!", sender: "other" },
                { text: "Shooooooooo BERT!", sender: "self" },
                { text: "You're my best friend", sender: "other" },
                { text: "No, *you're* my best friend", sender: "self" },
            ]
        }
    ]
})

const displayConvo = (name) => {
    setChat((prevChat) => ({
        ...prevChat,
        displayConversation: name,
    }));
};

const goBack = () => {
    setChat((prevChat) => ({
        ...prevChat,
        displayConversation: null,
    }));
}

const getCurrentConvo = () => {
const current = chat.conversations.find(
    (c) => c.with === chat.displayConversation
);
console.log("Current Convo:", current);
return current;
};

const contactArray = chat.conversations.map((c) => c.with);

    return (
        <div>
            {chat.displayConversation === null ? (
                <List contacts={contactArray} display={displayConvo} />
            ) : (
                <Conversation currentConvo={getCurrentConvo()} back={goBack} />
            )}
        </div>
    );
}