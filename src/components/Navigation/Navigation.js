import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
