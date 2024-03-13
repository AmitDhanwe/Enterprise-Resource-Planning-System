import React, { useEffect } from 'react';

const Dashboard = ({ products, orders }) => {
  // Calculate total number of products
  const storedProducts = localStorage.getItem('products');

  const totalProducts = JSON.parse(storedProducts).length;
  // Calculate total number of orders
  const totalOrders = orders.length;

  return (
    <div class='container'>
      <div class="card">
      <p class="text-title">{totalProducts}</p>
        <div class="card-details">
          <p>Total Products</p>
        </div>
        <button class="card-button">More info</button>
      </div>
      <div class="card">
      <p class="text-title">{totalOrders}</p>
        <div class="card-details">
          <p>Total Orders</p>
        </div>
        <button class="card-button">More info</button>
      </div>

    </div>
  );
};

export default Dashboard;
