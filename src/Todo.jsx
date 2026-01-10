import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todo() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            {
                id: Date.now(),
                text,
                completed: false,
            },
        ]);
    };


    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("todos"));
        if (saved) setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
        console.log("TODOS STATE:", todos);
    }, [todos]);

    return (
        <div className="todo-container">
            <h1>Your tasks</h1>
            <TodoInput addTodo={addTodo}/>
            <TodoList
                todos={todos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    );
}

export default Todo;