import React, { useState } from "react";
import "./index.css";

function TodoLists() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleChange(event) {
        setNewTask(event.target.value);
    }

    function handleClick() {
        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function handleDelete(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    return <div className="todo-list">
        <h1>To-Do-List</h1>
        <input 
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleChange}/>
        <button className="add-button"
            onClick={handleClick}>
            Add
        </button>
        <ol>
        {tasks.map((task, index) => 
            <li key={index}>
                <span>{task}</span>
                <button className="delete-button"
                    onClick={() => handleDelete(index)}>
                    Delete
                </button>
            </li>
        )}
    </ol>
</div>
}

export default TodoLists;
