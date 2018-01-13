import React, { Component } from 'react';

const ProductItem = ({ name ,excerpt, price, imgUrl, additemToCart }) => {
  return (
    <li>{name} =>>> {price}
      <button onClick={additemToCart}>
        add
      </button>
    </li>
  );
};

export default ProductItem;