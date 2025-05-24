import React, { useEffect } from "react";
import { useState } from "react";
import api from "../assets/axios";

export const LoginContext = React.createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(storedIsLoggedIn === "true");
    }
  }, []);

  const login = (userData) => {
    console.log(userData);
    api
      .post("/users/login", {
        email: userData.email,
        password: userData.password,
      })
      .then((response) => {
        console.log(response);

        setUser(response.data.user);
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("isLoggedIn", true);
      })
      .catch((err) => {
        console.error("Login failed:", err);
      });
  };

  const signup = (userData) => {
    api
      .post("/signup", {
        email: userData.email,
        password: userData.password,
        username: userData.username,
      })
      .then((response) => {
        console.log(response);
        setUser(response.data.user);
        setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("isLoggedIn", true);
      })
      .catch((err) => {
        console.error("Signup failed:", err);
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
