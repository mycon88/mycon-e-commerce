import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default function EditProduct({ product, fetchData }) {
  const [showModal, setShowModal] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});

  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleEditProduct = () => {
    fetch(`/api/product/${product}/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(editedProduct)
    })
    .then(res => res.json())
    .then(data => {
      console.log("Updated Product Data:", data);
      fetchData();
      handleClose();
    })
    .catch(error => {
      console.error("Error updating product:", error);
      // Handle error here
    });
  };

  return (
    <>
      <Button className='border p-1 bg-blue-500 text-white rounded shadow' variant="primary" size="sm" onClick={handleShow}>
        Edit
      </Button>

      <Modal
        show={showModal}
        onHide={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="border p-4 bg-white rounded shadow" style={{ width: "30%" }}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formProductName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={editedProduct.name || ''}
                  onChange={handleInputChange}
                  placeholder="Enter new product name"
                />
              </Form.Group>
              <Form.Group controlId="formProductDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  value={editedProduct.description || ''}
                  onChange={handleInputChange}
                  placeholder="Enter new product description"
                />
              </Form.Group>
              <Form.Group controlId="formProductPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={editedProduct.price || ''}
                  onChange={handleInputChange}
                  placeholder="Enter new product price"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className='border rounded shadow bg-blue-500 text-white p-2 shadow' variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button className='border rounded shadow bg-blue-500 text-white p-2 shadow' variant="primary" onClick={handleEditProduct}>
              Save Changes
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}
