import { useState } from "react";
import "./DopLogin.css";
import { useNavigate } from "react-router-dom";

const DopLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement API call for login here
    
    if(username=="admin1234" && password=="123456789"){
        alert("Welcome to Department of post");
        navigate("/Dop-home");
    }
    else{
        alert("wrong credentials");
        setPassword("");
        setUsername("");
    }
  };

  return (
    <div className="login-container">
      <h1>Login to Department of post</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default DopLogin;
