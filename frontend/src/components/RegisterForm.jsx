import React, { useState } from 'react';
import axios from 'axios';

export default function RegisterForm({ onRegistered }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await axios.post('http://localhost:8000/api/users/register/', {
                username,
                password
            });

            // Success! Backend returned 201 + token
            console.log('Registration successful:', res.data);

            // Clear form
            setUsername('');
            setPassword('');
            setError('');

            // Redirect to login page
            onRegistered(); // App.jsx will switch showForm to 'login'
        } catch (err) {
            console.log('Registration error:', err.response?.data);

            // Show backend error
            if (err.response?.data?.error === 'Username already exists') {
                setError('Username already exists!');
            } else if (err.response?.data?.error) {
                setError(err.response.data.error);
            } else {
                setError('Registration failed. Try again.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button type="submit">Register</button>
        </form>
    );
}
