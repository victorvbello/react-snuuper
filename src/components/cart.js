import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProductCart,deleteProductCart} from '../actions/cart';

class Cart extends Component {

  constructor(){
    super();
  }

  componentWillMount(){
    this.props.getProductCart();
  }

  renderUsersList(){
    return this.props.cartProducts.map((cartProduct,index)=>{
      return(
        <li key={cartProduct.id}>{cartProduct.name}
          <button onClick={() => this.props.deleteProductCart(index)}>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartProducts:state.cart.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductCart:()=>dispatch(getProductCart()),
    deleteProductCart:(itemIndex)=>dispatch(deleteProductCart(itemIndex))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
