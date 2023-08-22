import React from "react";

export default function Task({ task, taskCompleted }) {
    const completed = () => taskCompleted(task.text); 

    return (
        <div>
            {task.text} - <button onClick={completed}>Complete</button>
        </div>
    );
}