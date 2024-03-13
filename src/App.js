// App.js

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import DashboardPage from './pages/DashboardPage';
import ProductsPage from './pages/ProductsManagement';
import OrdersPage from './pages/OrdersPage';

const App = () => {

  const initialProducts = [
    { id: 1, name: 'Product 1', category: 'Category A', price: 50, stockQuantity: 100 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 20, stockQuantity: 50 },
    { id: 3, name: 'Product 2', category: 'Category B', price: 20, stockQuantity: 50 },
  ];

  localStorage.setItem('newProductId',initialProducts.length);

  const initialOrders = [
    { id: 1, customer: 'Amit', status: 'Pending', orderDate: '2024-02-22', expectedDeliveryDate :'2024-03-22'},
    { id: 2, customer: 'Raju', status: 'Shipped', orderDate: '2024-03-02', expectedDeliveryDate :'2024-03-15'},
    { id: 3, customer: 'Karan', status: 'Shipped', orderDate: '2024-02-28', expectedDeliveryDate :'2024-03-29'},
    { id: 4, customer: 'Piyush', status: 'Pending', orderDate: '2024-03-05', expectedDeliveryDate :'2024-03-22'},
    { id: 5, customer: 'Prabhas', status: 'Shipped', orderDate: '2024-03-10', expectedDeliveryDate :'2024-03-15'},
    { id: 6, customer: 'Surya', status: 'Shipped', orderDate: '2024-02-12', expectedDeliveryDate :'2024-03-29'},
  ];
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : initialProducts;
  });

  const [orders, setOrders] = useState(() => {
    const storedOrders = localStorage.getItem('orders');
    return storedOrders ? JSON.parse(storedOrders) :initialOrders;
  });

  localStorage.setItem('products', JSON.stringify(products));
  
  localStorage.setItem('orders', JSON.stringify(orders));
  
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<DashboardPage products={products} orders={orders} />} // Pass product and order data to DashboardPage
          />
          <Route
            path="/products"
            element={<ProductsPage products={products} setProducts={setProducts} />} // Pass product data to ProductsManagement
          />
          <Route
            path="/orders"
            element={<OrdersPage orders={orders} setOrders={setOrders} />} // Pass order data to OrdersManagement
          />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;

