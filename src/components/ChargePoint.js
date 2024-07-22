// src/components/ChargePoint.js
import React, { useState } from 'react';
import { chargeUserPoint } from '../services/userService';

const ChargePoint = ({ setMessage }) => {
    const [userId, setUserId] = useState('');
    const [point, setPoint] = useState('');

    const [isUserIdValid, setIsUserIdValid] = useState(true);
    const [isPointValid, setIsPointValid] = useState(true);

    const handleUserIdChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setUserId(value);
            setIsUserIdValid(value > 0);
        }
    };

    const handlePointChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setPoint(value);
            setIsPointValid(value > 0);
        }
    };

    const handleCharge = async () => {
        try {
            const response = await chargeUserPoint(userId, point);
            const successMessage = `Points charged: User ID: ${response.data.userId}, Points: ${response.data.point}`;
            setMessage(successMessage);
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className="container">
            <h2>Charge Point</h2>
            <div className="form-group">
                <label htmlFor="userId">User ID</label>
                <input
                    type="text"
                    className="form-control"
                    id="userId"
                    value={userId}
                    onChange={handleUserIdChange}
                    placeholder="User ID"
                />
                {!isUserIdValid && <div className="text-danger">User ID must be a positive number</div>}
            </div>
            <div className="form-group">
                <label htmlFor="points">Points</label>
                <input
                    type="text"
                    className="form-control"
                    id="points"
                    value={point}
                    onChange={handlePointChange}
                    placeholder="Points"
                />
                {!isPointValid && <div className="text-danger">Points must be a positive number</div>}
            </div>
            <button
                onClick={handleCharge}
                className="btn btn-primary"
                disabled={!isUserIdValid || !isPointValid || userId === '' || point === ''}
            >
                Charge
            </button>
        </div>
    );
};

export default ChargePoint;
