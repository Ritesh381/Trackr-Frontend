import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../assets/supabase";

export const LoginContext = React.createContext();

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [Id, setId] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");

    if (storedUser && storedIsLoggedIn === "true") {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (userData) => {
    const { email, password } = userData;

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("Users")
        .select("*")
        .eq("email", email)
        .eq("password", password)
        .single();

      if (error) {
        console.error("Login failed:", error.message);
        alert("Something went wrong. Please try again later.");
        return;
      }

      if (data) {
        console.log("Login successful:", data);
        setUser(data);
        setIsLoggedIn(true);
        setId(data.id);
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("Id", data.id);
        navigate("/dashboard");
      } else {
        alert("Incorrect email or password.");
      }
    } catch (err) {
      console.error("Unexpected error during login:", err);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  const signup = async (userData) => {
    const { email, password, username } = userData;

    if (!email || !password || !username) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const { data, error } = await supabase
        .from("Users")
        .insert([{ email, password, username }])
        .select();

      if (error) {
        console.error("Signup failed:", error.message);
        alert("Signup failed. Try again later.");
      } else {
        console.log("Signup successful:", data);
        alert("Signup successful. Please login.");
        navigate("/login");
      }
    } catch (err) {
      console.error("Unexpected signup error:", err);
      alert("Unexpected error. Please try again later.");
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, user, login, logout, signup, Id }}>
      {children}
    </LoginContext.Provider>
  );
};
