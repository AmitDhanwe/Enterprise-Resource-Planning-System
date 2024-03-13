import React, { useState } from 'react';

const EditOrderForm = ({ order, editOrder, closeModal }) => {
  const [formData, setFormData] = useState(order);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editOrder(formData);
  };

  return (
    <div class='popup' id='add-product-form'>
      <div class='overlay'></div>
      <div class='content'>
        <h2>Edit Product Details</h2>
        <div class='close-btn' onClick={closeModal}>&times;</div>
        <div className="order-details">
          <h3>Order Details</h3>
          <p>Order ID: {order.id}</p>
          <p>Customer Name: {order.customer}</p>
          <p>Order Date: {order.orderDate}</p>
          <p>Expected Delivery: {order.expectedDeliveryDate}</p>
          <p>Status: {order.status}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label>Expected Delivery: </label>
            <input type="date" name="expectedDeliveryDate" placeholder="Expected Delivery" value={formData.expectedDeliveryDate} onChange={handleInputChange} required />
          </div>
          <div class="form-group">
            <label>Status: </label>
            <select name="status" value={formData.status} onChange={handleInputChange} required>
              <option value="">Select Status</option>
              <option value="Shipped">Shipped</option>
              <option value="Pending">Pending</option>
              <option value="Ready to ship">Ready to ship</option>
            </select>
          </div>
          <div class="form-group">
            <button class='addbtn' type="submit">Update Order</button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default EditOrderForm;
