import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductContainer from '../containers/productContainer';
import CartContainer from '../containers/cartContainer';

const Content = ({}) => {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/products/:category' component={ProductContainer} />
        <Route exact path='/shoppingCart' component={CartContainer} />
      </Switch>
    </div>
 );
};

export default Content;