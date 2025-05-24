import React from 'react';
import { useState } from 'react';

export const LoginContext = React.createContext();

export const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    
    const login = (userData) => {
        setUser(userData);
        setIsLoggedIn(true);
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('isLoggedIn', true);
    };
    
    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');
    };
    
    return (
        <LoginContext.Provider value={{ isLoggedIn, user, login, logout }}>
        {children}
        </LoginContext.Provider>
    );
    }