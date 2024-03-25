import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function ProductCard({ productProp }) {

  const { _id, name, description, price } = productProp;

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
  <div className="d-flex justify-content-center">
    <Card className="flex mt-3">
      <Card.Body className="border border shadow" style={{ width: "30%" }}>
        <Card.Title className="mb-2">{name}</Card.Title>
        <Card.Subtitle className="mb-0">Description:</Card.Subtitle>
        <Card.Text className="mb-2">{description}</Card.Text>
        <Card.Subtitle className="mb-0">Price:</Card.Subtitle>
        <Card.Text className="mb-2">PHP {price}</Card.Text>
        <Link to={`/product/${_id}`} className="border rounded shadow bg-blue-500 text-white p-1">
          Details
        </Link>
      </Card.Body>
    </Card>
  </div>
</div>


  );
}

ProductCard.propTypes = {
  productProp: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired // Ensure that productProp is always provided
};
