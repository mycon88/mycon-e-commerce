import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Import ProductCard component

function UserView({ productsData }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsArr = productsData.map(product => {
      // Only render the active products
      if (product.isActive === true) {
        return <ProductCard productProp={product} key={product._id} />;
      } else {
        return null;
      }
    });

    // Set the products state to the result of our map function
    setProducts(productsArr);
  }, [productsData]);

  return <>{products}</>;
}

export default UserView;
