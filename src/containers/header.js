import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProductCart } from '../actions/cart';
import Menu from '../components/menu';

class Header extends Component {

  componentWillMount(){
    this.props.getProductCart();
  }

  render() {
    return (
      <Menu totalProductCart={this.props.totalProductCart}/>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    totalProductCart:state.cart.list.length,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductCart:()=>dispatch(getProductCart())
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Header);