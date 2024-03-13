import React, { useState } from 'react';

import '../../styles/productadd.css'

const AddProductForm = ({ addProduct, products, closeModal }) => {
  const [formData, setFormData] = useState({ name: '', category: '', price: '', stockQuantity: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the current value of newProductId from localStorage
    let newProductId = localStorage.getItem('newProductId');

    // Parse the value as an integer and increment it by one
    newProductId = parseInt(newProductId) + 1;

    // Update the value of newProductId in localStorage
    localStorage.setItem('newProductId', newProductId.toString());

    const newProduct = { ...formData, id: newProductId };

    addProduct(newProduct);
    setFormData({ name: '', category: '', price: '', stockQuantity: '' }); // Clear form after submission
  };

  return (
    <div class='popup' id='add-product-form'>
      <div class='overlay'></div>
      <div class='content'>
        <h2>Add Product</h2>
        <div class='close-btn' onClick={closeModal}>&times;</div>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label htmlFor="productName">Product Name:</label>
            <input type="text" id="productName" name="name" placeholder="Product Name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div class="form-group">
            <label htmlFor="productCategory">Product Category:</label>
            <input type="text" id="productCategory" name="category" placeholder="Category" value={formData.category} onChange={handleInputChange} required />
          </div>
          <div class="form-group">
            <label htmlFor="productPrice">Price:</label>
            <input type="number" id="productPrice" name="price" placeholder="Price" value={formData.price} onChange={handleInputChange} required />
          </div>
          <div class="form-group">
            <label htmlFor="productStock">Stock Quantity:</label>
            <input type="number" id="productStock" name="stockQuantity" placeholder="Stock Quantity" value={formData.stockQuantity} onChange={handleInputChange} required />
          </div>
          <button class='addbtn' type="submit">Add Product</button>
        </form>
      </div>
    </div>

  );
};

export default AddProductForm;
