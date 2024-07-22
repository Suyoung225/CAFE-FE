// src/components/ErrorPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ message }) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/');
    };

    return (
        <div>
            <h2>Error</h2>
            <p>{message}</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default ErrorPage;
