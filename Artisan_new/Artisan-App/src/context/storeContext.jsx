import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Create the context
export const StoreContext = createContext(null);

// Context Provider Component
export const StoreContextProvider = (props) => {
  const [user, setUser] = useState(""); // Store user details
  const [loading, setLoading] = useState(true); // Loading state for API calls
  const navigate = useNavigate();
  const [Artisan,setArtisan]=useState("")

  // Simulate fetching user data on app load (e.g., check if user is logged in)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/auth/check-session"); // Example API
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching user session:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  // Login Function
  const login = async (credentials) => {
    try {
      const response = await axios.post("/api/auth/login", credentials);
      setUser(response.data.user);
      navigate("/dashboard"); // Navigate to dashboard after login
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials!");
    }
  };

  // Logout Function
  const logout = async () => {
    try {
      await axios.post("/api/auth/logout");
      setUser(null);
      navigate("/"); // Navigate to login screen after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Context Value
  const contextValue = {
    user,
    loading,
    login,
    logout,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

