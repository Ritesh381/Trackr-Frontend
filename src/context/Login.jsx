import React, { useEffect } from "react";
import { useState } from "react";
import api from "../assets/axios";
import { useNavigate } from "react-router-dom";

export const LoginContext = React.createContext();

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(storedIsLoggedIn === "true");
    }
  }, []);

  const login = (userData) => {
    if (!userData.email || !userData.password) {
      console.error("Missing email or password");
      return;
    }
    console.log("Sending userData:", userData);
    api
      .post("/users/login", {
        email: userData.email,
        password: userData.password,
      })
      .then((response) => {
        console.log("Login successful:", response.data);
        setUser(response.data.user);
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("isLoggedIn", "true");
      })
      .catch((err) => {
        console.error("Login failed:", err?.response?.data || err.message);
      });
  };

  const signup = (userData) => {
    if (!userData.email || !userData.password) {
      console.error("Missing username, email, or password");
      return;
    }

    console.log("Sending signup data:", userData);

    api
      .post("/users/register", {
        email: userData.email,
        password: userData.password,
      })
      .then((response) => {
        console.log("Signup successful:", response.data);
        navigate("/login");
      })
      .catch((err) => {
        console.error("Signup failed:", err?.response?.data || err.message);
      });
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, user, login, logout, signup }}>
      {children}
    </LoginContext.Provider>
  );
};
