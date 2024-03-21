import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AdminView from '../components/AdminView'; // Import AdminView component
import UserView from '../components/UserView'; // Import UserView component

function Products({ user }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    // Fetch product data when the component mounts
    fetchProducts();
  }, []);
  const isAdmin = currentUser && currentUser.isAdmin;
  const fetchProducts = async () => {
    try {
      const fetchURL = isAdmin
        ? `/api/product/all`
        : `/api/product/`;
  
      const response = await fetch(fetchURL);
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setProducts(data.allProducts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  

  // Check if currentUser exists and has isAdmin property
 

  return (
    <div className="container-fluid text-center">
      <>
        {isAdmin ? ( // Check if user is admin
          <AdminView productsData={products} fetchData={fetchProducts} /> // Render AdminView for admin user
        ) : (
          <UserView productsData={products} /> // Render UserView for regular user
        )}
      </>
    </div>
  );
}

export default Products;
