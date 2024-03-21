import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import EditProduct from './EditProduct';
import ArchiveProduct from './ArchiveProduct';

export default function AdminView({ productsData, fetchData }) {
  // Add state to store products
  const [products, setProducts] = useState([]);

  // Fetch product data when the component mounts or when fetchData changes
  useEffect(() => {
    setProducts(productsData.map(product => (
      <tr key={product._id}>
        <td className="border border-gray-300">{product._id}</td>
        <td className="border border-gray-300">{product.name}</td>
        <td className="border border-gray-300">{product.description}</td>
        <td className="border border-gray-300">{product.price}</td>
        <td className={`border text-white ${product.isActive ? "bg-green-500 text-success" : "bg-red-500 text-danger"} shadow-md`}>
        {product.isActive ? "Available" : "Unavailable"}
        </td>

        <td className="border border-gray-300"><EditProduct product={product._id} fetchData={fetchData} /></td>
        <td className="border border-gray-300"><ArchiveProduct productId={product._id} isActive={product.isActive} fetchData={fetchData} /></td>
      </tr>
    )));
  }, [productsData, fetchData]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center my-4">Admin Dashboard</h1>
      <div className="border border-gray-300 rounded-lg shadow-lg">
        <Table striped bordered hover responsive className="mx-auto w-full">
          <thead>
            <tr className="text-center">
              <th className="border border-gray-300">ID</th>
              <th className="border border-gray-300">Name</th>
              <th className="border border-gray-300">Description</th>
              <th className="border border-gray-300">Price</th>
              <th className="border border-gray-300">Availability</th>
              <th colSpan="2" className="border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
