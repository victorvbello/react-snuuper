import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Product from '../components/product';
import Cart from '../components/cart';

const Content = ({}) => {
  return (
    <div>
      <Switch>
        <Route exact path='/products/:category' component={Product} />
        <Route exact path='/shoppingCart' component={Cart} />
      </Switch>
    </div>
 );
};

export default Content;