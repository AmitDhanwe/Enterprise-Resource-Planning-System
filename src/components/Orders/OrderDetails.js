import React from 'react';
import '../../App.css';

const OrderDetails = ({ order, closeModal }) => {
  return (
    <div class='popup' id='add-product-form'>
    <div class='overlay'></div>
    <div class='content'>
      <h3>Order Details</h3>
      <div class='close-btn' onClick={closeModal}>&times;</div>

      <p>Order ID: {order.id}</p>
      <p>Customer Name: {order.customer}</p>
      <p>Order Date: {order.orderDate}</p>
      <p>Expected Delivery: {order.expectedDeliveryDate}</p>
      <p>Status: {order.status}</p>
    </div>
    </div>
  );
};

export default OrderDetails;