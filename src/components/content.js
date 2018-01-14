import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Well } from 'react-bootstrap';

import ProductContainer from '../containers/productContainer';
import Cart from '../components/cart';

const Content = ({}) => {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/products/:category' component={ProductContainer} />
        <Route exact path='/shoppingCart' component={Cart} />
      </Switch>
    </div>
 );
};

export default Content;