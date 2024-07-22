import React, { useState } from 'react';
import { getUserInfo } from '../services/userService';

const GetUserInfo = ({ setMessage }) => {
    const [userId, setUserId] = useState('');
    const [userInfo, setUserInfo] = useState(null);
    const [isUserIdValid, setIsUserIdValid] = useState(true);

    const handleUserIdChange = (e) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            setUserId(value);
            setIsUserIdValid(value > 0);
        } else {
            setIsUserIdValid(false);
        }
    };

    const handleGetUserInfo = async () => {
        if (!isUserIdValid || userId === '') {
            setMessage('Please enter a valid User ID', true);
            return;
        }
        
        try {
            const response = await getUserInfo(userId);
            setUserInfo(response.data);
            setMessage('');
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <div className="container">
            <h2>Get User Info</h2>
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
            <button onClick={handleGetUserInfo} className="btn btn-primary" disabled={!isUserIdValid || userId === ''}>
                Get Info
            </button>
            {userInfo && (
                <div className="mt-4">
                    <p><strong>User ID:</strong> {userInfo.userId}</p>
                    <p><strong>Nickname:</strong> {userInfo.nickname}</p>
                    <p><strong>Points:</strong> {userInfo.point}</p>
                </div>
            )}
        </div>
    );
};

export default GetUserInfo;
