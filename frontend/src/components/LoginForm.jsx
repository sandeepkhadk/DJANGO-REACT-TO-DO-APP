import React, { useState } from 'react';
import axios from 'axios';

export default function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost:8000/api/users/login/', {
                username,
                password
            });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', res.data.username);
            onLogin(res.data.username);
        } catch (err) {
            setError(err.response?.data?.error || 'Login failed');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            {error && <p style={{color:'red'}}>{error}</p>}
        </div>
    );
}
