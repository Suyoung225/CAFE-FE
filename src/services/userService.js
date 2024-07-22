// src/services/userService.js

const API_BASE_URL = 'http://localhost:8080'; 

export const registerUser = async (nickname) => {
    const response = await fetch(`${API_BASE_URL}/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nickname }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
    }

    return response.json();
};

export const chargeUserPoint = async (userId, point) => {
    const response = await fetch(`${API_BASE_URL}/point/charge`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, point }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
    }

    return response.json();
};

export const getUserInfo = async (userId) => {
    const response = await fetch(`${API_BASE_URL}/user/info/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
    }

    return response.json();
};