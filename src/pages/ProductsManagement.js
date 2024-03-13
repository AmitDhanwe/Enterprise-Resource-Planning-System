import React, { useEffect, useState } from 'react';
import AddProductForm from '../components/Products/AddProductForm';
import ProductList from '../components/Products/ProductList';

import EditProductForm from '../components/Products/EditProductForm';
import DeleteConfirmationModal from '../components/Products/DeleteConfirmationModal';

import '../styles/products.css';

const ProductsManagement = () => {
  
  const storedProducts = localStorage.getItem('products');

  const [products, setProducts] = useState(JSON.parse(storedProducts));
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setIsAdding(false);
  };

  const editProduct = (editedProduct) => {
    const updatedProducts = products.map(product =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProducts(updatedProducts);
    setIsEditing(false);
  };

  const deleteProduct = () => {
    const updatedProducts = products.filter(product => product.id !== selectedProduct.id);
    setProducts(updatedProducts);
    setIsDeleting(false);
  };

  const closeModal = () => {
    setIsDeleting(false);
    setIsEditing(false);
    setIsAdding(false);
  };
  // Save product data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <main class="table" id="customers_table">
      <section class="table__header">
        <h1>Products Management</h1>
        <button type="button" class="add-product" href="#divOne" onClick={() => setIsAdding(true)}>
          <span class="button__text">Add Product</span>
          <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
        </button>

      </section>
      <section class="table__body">
        <ProductList
          products={products}
          onEdit={(product) => {
            setSelectedProduct(product);
            setIsEditing(true);
          }}
          onDelete={(product) => {
            setSelectedProduct(product);
            setIsDeleting(true);
          }}
        />
        {isAdding && <AddProductForm addProduct={addProduct} setIsAdding={setIsAdding} products={products} closeModal={closeModal}/>}
        {isEditing && <EditProductForm editProduct={editProduct} product={selectedProduct} setIsEditing={setIsEditing} closeModal={closeModal} />}
        {isDeleting && (
          <DeleteConfirmationModal
          productId={selectedProduct.id}
            deleteProduct={deleteProduct}
            closeModal={closeModal}
          />
        )}
      </section>
    </main>
  );
};

export default ProductsManagement;