import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProductCart,deleteProductCart,getTotalPrice} from '../actions/cart';

class Cart extends Component {

  constructor(){
    super();
    this.state={
      totalPrice:0
    }
  }

  componentWillMount(){
    this.props.getProductCart();
  }
  
  renderUsersList(){
    return this.props.cartProducts.map((cartProduct,index)=>{
      return(
        <li key={cartProduct.id}>{cartProduct.name} =>>> {cartProduct.price}
          <button onClick={() => this.props.deleteProductCart(cartProduct.id)}>
            remove
          </button>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Lista de Productos en el carro de compras</h2>
        <ul>
          {this.renderUsersList()}
        </ul>
        total: {this.props.totalCart}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartProducts:state.cart.list,
    totalCart:state.cart.totalPrice
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductCart:()=>dispatch(getProductCart()),
    deleteProductCart:(productId)=>dispatch(deleteProductCart(productId))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
