// DeleteConfirmationModal.js

import React from 'react';

const DeleteConfirmationModal = ({ productId, deleteProduct, closeModal }) => {
  const handleDelete = () => {
    deleteProduct(productId);
  };

  return (

    <div class='popup' id='add-product-form'>
      <div class='overlay'></div>
      <div class='content'>
        <h2>Delete Product</h2>
        <div class='close-btn' onClick={closeModal}>&times;</div>
        <p>Are you sure you want to delete product with ID: {productId}?</p>
        <div className="modal-buttons">
          <button class='addbtn' onClick={handleDelete}>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
