import React, { useState } from "react";
import Task from "./Task";

export default function Todos() {
    const [tasks, setTasks] = useState([
            { text: "Take out trash", complete: false },
            { text: "Trash talk Carrie", complete: true },
            { text: "Carry boxes upstairs", complete: false },
        ]);

        const taskCompleted = (text) => {
            const newTasks = [...tasks];
            newTasks.find(task => task.text === text).complete = true;
            setTasks(newTasks);
        }

    return (
        <div>
            {tasks
                .filter((task) => !task.complete)
                .map((task) => (
                    <Task
                        key={task.text}
                        task={task}
                        taskCompleted={taskCompleted}
                    />
                ))}
        </div>
    );
}