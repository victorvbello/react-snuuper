import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getProductCart,deleteProductCart,sendCart} from '../actions/cart';
import CartItem from './cartItem';

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
  
  renderCartList(){
    return this.props.cartProducts.map((cartProduct)=>{
      return(
        <CartItem
          key={cartProduct.id}
          category={cartProduct.category}
          name={cartProduct.name} 
          price={cartProduct.price} 
          deleteItem={() => this.props.deleteProductCart(cartProduct.id)} />
      );
    });
  }

  render() {
    let ifCartSend=null;
     if(this.props.cartSave){
      ifCartSend=(<span>Carro guardado con exito</span>);
    }
    return (
      <div>
        <h2>Lista de Productos en el carro de compras</h2>
        <ul>
          {this.renderCartList()}
        </ul>
        total: {this.props.totalCart}
        <button onClick={this.props.sendCart} disabled={this.props.totalCart==0}>Terminar Compra</button>
        {ifCartSend}
      </div>
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
    sendCart:()=>dispatch(sendCart())
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
