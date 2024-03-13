import React, { useState } from 'react';

const EditProductForm = ({ product, editProduct, closeModal }) => {
  const [formData, setFormData] = useState(product);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct(formData);
  };

  return (
    <div class='popup' id='add-product-form'>
      <div class='overlay'></div>
      <div class='content'>
        <h2>Edit Product Details</h2>
        <div class='close-btn' onClick={closeModal}>&times;</div>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label htmlFor="productName">Product Name:</label>
            <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div class="form-group">
            <label htmlFor="productCategory">Product Category:</label>
            <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleInputChange} required />

          </div>
          <div class="form-group">
            <label htmlFor="productPrice">Price:</label>
            <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleInputChange} required />
          </div>
          <div class="form-group">
            <label htmlFor="productStock">Stock Quantity:</label>
            
            <input type="number" name="stockQuantity" placeholder="Stock Quantity" value={formData.stockQuantity} onChange={handleInputChange} required />
            <button class='addbtn' type="submit">Update Product</button>
          </div>
        </form>

      </div>
    </div>
    
  );
};

export default EditProductForm;
