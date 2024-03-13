import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import '../styles/dashboard.css';

const DashboardPage = ({ products, orders }) => {
  return (
        <Dashboard products={products} orders={orders} />
  );
};

export default DashboardPage;
