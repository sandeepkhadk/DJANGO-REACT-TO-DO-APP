import React, { useState } from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Todo from './components/Todo';
import './App.css';

export default function App() {
    const [user, setUser] = useState(localStorage.getItem('username') || null);
    const [showForm, setShowForm] = useState(null); // 'login' or 'register'

    const handleLogin = (username) => {
        setUser(username);
        localStorage.setItem('username', username);
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('username');
        setShowForm(null);
    };

    const handleRegistered = () => {
    // Show login page after successful registration
    setShowForm('login');
    alert('Registration successful! Please login.');
};


    if (!user) {
        return (
            <div className="auth-container">
                <h1>Welcome to MyTodo App</h1>

                {!showForm && (
                    <div className="choice-buttons">
                        <button onClick={() => setShowForm('login')}>Login</button>
                        <button onClick={() => setShowForm('register')}>Register</button>
                    </div>
                )}

                {showForm === 'login' && <LoginForm onLogin={handleLogin} />}
                {showForm === 'register' && (
                    <RegisterForm onRegistered={handleRegistered} />
                )}
            </div>
        );
    }

    return (
        <div>
            <div className="todo-header">
                <h2>Hello, {user}!</h2>
                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <Todo username={user} />
        </div>
    );
}
