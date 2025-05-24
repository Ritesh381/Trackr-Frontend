import React, { useContext, useState } from "react";
import { LoginContext } from "../context/Login";
import { Link } from "react-router-dom";

function Login() {
  const { login } = useContext(LoginContext);
  const [formData, setFormData] = useState(LoginContext);
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // Validate form data
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }
    if (error) {
      setError("Please correct the errors before submitting");
      return;
    }
    setError("");
    login({ userData: formData });
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setFormData({ ...formData, email: email });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && !emailRegex.test(email)) {
      setError("Invalid email format");
    } else {
      setError("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Login
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Please enter your credentials to login.
        </p>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="username"
              name="username"
              value={formData.email || ""}
              onChange={handleEmailChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password || ""}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <input
            type="submit"
            value="Login"
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          />
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
