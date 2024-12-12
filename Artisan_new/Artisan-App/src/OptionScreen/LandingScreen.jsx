import { Link } from "react-router-dom";
import "./LandingScreen.css";

const Landing = () => {
  return (
    <div className="landing">
      <h1>Welcome to Our Platform</h1>
      <p>Select your role to continue:</p>
      <div className="role-selection">
        <Link to="/choose-role" className="role-link">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Landing;
