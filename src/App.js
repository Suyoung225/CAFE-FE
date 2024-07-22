// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import ChargePoint from './components/ChargePoint';
import GetUserInfo from './components/GetUserInfo';
import ErrorPage from './components/ErrorPage';
import './App.css';

function App() {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSetMessage = (message, isError = false) => {
        if (isError) {
            setErrorMessage(message);
            setSuccessMessage('');
        } else {
            setErrorMessage('');
            setSuccessMessage(message);
        }
    };

    return (
        <Router>
            <div className="container">
                <h1 className="my-4">User Management</h1>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                <Routes>
                    <Route path="/user" element={
                        <>
                            <Register setMessage={handleSetMessage} />
                            <ChargePoint setMessage={handleSetMessage} />
                            <GetUserInfo setMessage={handleSetMessage} />
                        </>
                    } />
                    <Route path="/error" element={<ErrorPage message={errorMessage || "An error occurred"} />} />
                    <Route path="*" element={<Navigate to="/user" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
