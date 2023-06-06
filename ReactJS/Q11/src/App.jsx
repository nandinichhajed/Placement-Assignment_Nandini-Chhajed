import React, { useReducer, useState } from "react";
import todoReducer from "./todoReducer";
import "./App.css";

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [text, setText] = useState("");

    const addTodo = () => {
        if (text.trim() !== "") {
            dispatch({ type: "ADD_TODO", payload: text });
            setText("");
        }
    };

    const toggleTodo = (id) => {
        dispatch({ type: "TOGGLE_TODO", payload: id });
    };

    const deleteTodo = (id) => {
        dispatch({ type: "DELETE_TODO", payload: id });
    };

    return (
        <div className="container">
            <h1>Todo App</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter a new todo"
                />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={`todo-item ${
                            todo.completed ? "completed" : ""
                        }`}
                        onClick={() => toggleTodo(todo.id)}
                    >
                        {todo.text}
                        <button
                            className="delete-button"
                            onClick={() => deleteTodo(todo.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
