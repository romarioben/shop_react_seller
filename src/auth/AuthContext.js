import React, { createContext, useContext, useState } from "react";
import api from "../api"; // Adjust the import path as necessary

const AuthContext = createContext();

export useAuth = () => {
  useContext(AuthContext);
}   

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const login = async (credentials) => {
    try {
      const response = await api.post("/login", credentials);
      setUser(response.data.user);
      setLoading(false);
    } catch (error) {
      console.error("Login failed:", error);
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}