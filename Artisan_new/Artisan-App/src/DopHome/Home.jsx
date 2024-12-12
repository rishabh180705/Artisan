import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function DopHome() {
  return (
    <div className="home-container">
      <h1>Welcome to Artisan Marketplace</h1>
      <nav className="nav-links">
        <ul>
          <li>
            <Link to="/all-orders">All Orders</Link>
          </li>
          <li>
            <Link to="/all-artisans">All Artisans</Link>
          </li>
          <li>
            <Link to="/help-desk">Help Desk</Link>
          </li>
          <li>
            <Link to="/artisan-first-product">Artisan with first product</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/add-product">Add Product on behalf of Artisans</Link>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}

export default DopHome;