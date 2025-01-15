import React from 'react';
import CartItem from './CartItem';

const Products = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map((item) => (
        <CartItem key={item.id} data={item} /> 
      ))}
    </div>
  );
};

export default Products;
