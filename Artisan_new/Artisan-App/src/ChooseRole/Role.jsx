import { Link } from "react-router-dom";
import "./ChooseRole.css";

const ChooseRole = () => {
  return (
    <div className="choose-role">
      <h1>Select Your Role</h1>
      <div className="role-options">
        <Link to="/Dop-Login" className="role-link admin">
          Admin
        </Link>
        <Link to="/Artisan-Login" className="role-link artisan">
          Artisan
        </Link>
      </div>
    </div>
  );
};

export default ChooseRole;
