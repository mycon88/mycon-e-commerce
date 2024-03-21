import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function ProductCard({ productProp }) {

  const { _id, name, description, price } = productProp;

  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-0">Description:</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Subtitle className="mb-0">Price:</Card.Subtitle>
        <Card.Text>PHP {price}</Card.Text>
        <Link to={`/product/${_id}`} className="btn btn-primary">
          Details
        </Link>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  productProp: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired // Ensure that productProp is always provided
};
