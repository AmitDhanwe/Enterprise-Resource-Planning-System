import React, { useEffect, useState } from 'react';
import OrderList from '../components/Orders/OrderList';
import OrderDetails from '../components/Orders/OrderDetails';
import EditOrderForm from '../components/Orders/EditOrderForm';
import DeleteConfirmationModal from '../components/Orders/DeleteConfirmationModal';

import '../styles/orders.css';

const OrdersPage = () => {

  const storedOrders = localStorage.getItem('orders');

  const [orders, setOrders] = useState(JSON.parse(storedOrders));
  
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  
  const editOrder = (editedOrder) => {
    const updatedOrders = orders.map(order =>
      order.id === editedOrder.id ? editedOrder : order
    );
    setOrders(updatedOrders);
    setIsEditing(false);
  };

  const deleteOrder = () => {
    const updatedOrders = orders.filter(order => order.id !== selectedOrder.id);
    setOrders(updatedOrders);
    setIsDeleting(false);
  };
  
  const closeModal=() =>{
    setIsDeleting(false);
    setIsEditing(false);
    setIsSelected(false);
  };

  // Save product data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  return (
    <main class="table" id="customers_table">
      <section class="table__header">
        <h1>Orders Management</h1>
      </section>
      <section class="table__body">
      <OrderList 
        orders={orders} 
        onOrderClick={(order)=>{
          setSelectedOrder(order);
          setIsSelected(true);
        }}
        onEdit={(order) => {
          setSelectedOrder(order);
          setIsEditing(true);
        }}
        onDelete={(order) => {
          setSelectedOrder(order);
          setIsDeleting(true);
        }}/>
      {isSelected && <OrderDetails order={selectedOrder} closeModal={closeModal}/>}
      {isEditing && <EditOrderForm editOrder={editOrder} order={selectedOrder} setIsEditing={setIsEditing} closeModal={closeModal}/>}
      {isDeleting && (
        <DeleteConfirmationModal
        orderId={selectedOrder.id}
          deleteOrder={deleteOrder}
          closeModal={closeModal}
        />
      )}
    </section>
    </main>
  );
};

export default OrdersPage;