import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProductCart, deleteProductCart, sendCart } from '../actions/cart';
import CartList from '../components/cartList';

class CartContainer extends Component {

  componentWillMount(){
    this.props.getProductCart();
  }

  render() {
    return (
      <CartList
        totalCart={this.props.totalCart}
        cartSave={this.props.cartSave}
        cartProducts={this.props.cartProducts}
        sendCart={(listProducts)=>{this.props.sendCart(listProducts)}}
        deleteProductCart={(productId)=>{this.props.deleteProductCart(productId)}}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartProducts:state.cart.list,
    totalCart:state.cart.totalPrice,
    cartSave:state.cart.send
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductCart:()=>dispatch(getProductCart()),
    deleteProductCart:(productId)=>dispatch(deleteProductCart(productId)),
    sendCart:(listProducts)=>dispatch(sendCart(listProducts))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);
