import React, { Component } from 'react';

const CartItem = ({ category, name, price,deleteItem }) => {
  return (
    <li>{name} =>>> {price}
      <button onClick={deleteItem}>
        remove
      </button>
    </li>
  );
};

export default CartItem;