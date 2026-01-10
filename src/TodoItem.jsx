import React from 'react';
import "./App.css";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
    return (
        <div className="todo-item">
            <div className="check-text">
                <input
                className="checkbox"
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                />

                <span onClick={() => toggleTodo(todo.id)} >
                    {todo.text}
                </span>
            </div>
            <button onClick={() => deleteTodo(todo.id)}>X</button>
        </div>
    );
}

export default TodoItem;
