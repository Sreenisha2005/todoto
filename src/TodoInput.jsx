import React, {useState} from 'react';
import './App.css';


function TodoInput({ addTodo }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text.trim()) return;

        addTodo(text);   // ✅ THIS IS CRITICAL
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} >
            <input
                className="input-text"
                type="text"
                value={text}                     // ✅ MUST EXIST
                onChange={(e) => setText(e.target.value)} // ✅ MUST EXIST
                placeholder="Add a new task"
            />

            <button type="submit">Add</button>
        </form>

    );

}

export default TodoInput;