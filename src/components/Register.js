// src/components/Register.js
import React, { useState } from 'react';
import { registerUser } from '../services/userService';

const Register = ({ setMessage }) => {
    const [nickname, setNickname] = useState('');

    const handleRegister = async () => {
        try {
            const response = await registerUser(nickname);
            const successMessage = `User registered: Nickname: ${response.data.nickname}, UserId: ${response.data.userId}, Points: ${response.data.point}`;
            setMessage(successMessage);
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <div className="form-group">
                <label htmlFor="nickname">Nickname</label>
                <input
                    type="text"
                    className="form-control"
                    id="nickname"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="Nickname"
                />
            </div>
            <button onClick={handleRegister} className="btn btn-primary">Register</button>
        </div>
    );
};

export default Register;
