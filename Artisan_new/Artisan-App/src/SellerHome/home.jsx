import { Link } from "react-router-dom";
import "./home.css"; // Optional for styling

const SellerHome = () => {
  return (
    <div className="home">
      <h1>Welcome to the Dashboard</h1>
      <div className="navigation-options">
        <Link to="/Add" className="nav-link">
          Add Product
        </Link>
        <Link to="/order" className="nav-link">
          Order Page
        </Link>
        <Link to="/List-product" className="nav-link">
           Listed product
        </Link>
        <Link to="/profile" className="nav-link">
          Profile
        </Link>
       
      </div>
    </div>
  );
};

export default SellerHome;
