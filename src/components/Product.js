import React from 'react';
import { useParams } from 'react-router-dom';

function Product() {
  const { id } = useParams();

  return (
    <div>
      <h1>Product ID: {id}</h1>
      {/* Use the id to fetch product details or display content */}
    </div>
  );
}

export default Product;
