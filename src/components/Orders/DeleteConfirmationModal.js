import React from 'react';

const DeleteConfirmationModal = ({ orderId, deleteOrder, closeModal }) => {
  const handleDelete = () => {
    deleteOrder(orderId);
  };

  return (
    <div class='popup' id='add-product-form'>
    <div class='overlay'></div>
    <div class='content'>
      <h2>Delete Order</h2>
      <div class='close-btn' onClick={closeModal}>&times;</div>   
        <p>Are you sure you want to delete order with ID: {orderId}?</p>
        <div className="modal-buttons">
          <button class='addbtn' onClick={handleDelete}>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
