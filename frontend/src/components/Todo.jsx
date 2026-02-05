import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Todo({ username }) {
    const [todos, setTodos] = useState([]);
    const [inputValues, setInputValues] = useState('');

    // Get token from localStorage
    const token = localStorage.getItem('token');

    // Common headers with token
    const config = {
        headers: { Authorization: `Token ${token}` }
    };

    // Fetch todos on page load
    useEffect(() => {
        const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/todos/', config);
            setTodos(response.data);
        } catch (error) {
            console.log('Error fetching tasks:', error);
        }
    };
        fetchTasks();
    }, []);

    

    // Delete todo
    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/todos/${id}/delete/`, config);
            const updatedTodos = todos.filter((todo) => todo.id !== id);
            setTodos(updatedTodos);
        } catch (error) {
            console.log('Error deleting task:', error);
        }
    };

    // Add new todo
    const addTask = async () => {
        if (!inputValues.trim()) return;

        try {
            const response = await axios.post(
                'http://localhost:8000/api/todos/add/',
                { title: inputValues, completed: false },
                config
            );
            setTodos([...todos, response.data]);
            setInputValues('');
        } catch (error) {
            console.log('Error adding task:', error);
        }
    };

    // Toggle completed status
    const toggleCompleted = async (todo) => {
        try {
            const response = await axios.put(
                `http://localhost:8000/api/todos/${todo.id}/update/`,
                { completed: !todo.completed },
                config
            );

            setTodos(
                todos.map(t =>
                    t.id === todo.id
                        ? { ...t, completed: response.data.completed }
                        : t
                )
            );
        } catch (error) {
            console.log('Error toggling task:', error);
        }
    };

    return (
        <div className="container">
            <div className="todo-app">
                <div className="app-title">
                    <h2>{username}'s To-Do App</h2>
                </div>

                <div className="row">
                    <input
                        type="text"
                        placeholder="Add your task"
                        value={inputValues}
                        onChange={(e) => setInputValues(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && addTask()}
                    />
                    <button onClick={addTask}>Add</button>
                </div>

                <ul className="list-container">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className={todo.completed ? 'checked' : ''}
                            onClick={() => toggleCompleted(todo)}
                        >
                            {todo.completed ? <del>{todo.title}</del> : todo.title}
                            <span
                                onClick={(e) => {
                                    e.stopPropagation(); // prevent toggle
                                    deleteTask(todo.id);
                                }}
                            >
                                X
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
