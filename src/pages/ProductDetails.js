import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
      {/*
        <Link to='..'>Back</Link> => back to prev route or parent route
        <Link to='..' relative='path'>Back</Link> => back to prev path
      */}
      <p>
        <Link to=".." relative='path'>Back</Link>
      </p>
    </>
  );
};

export default ProductDetailPage;
