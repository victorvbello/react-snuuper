import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ListGroup, ListGroupItem, Grid, Row, Col, Button, Alert } from 'react-bootstrap';

import {getProductCart,deleteProductCart,sendCart} from '../actions/cart';
import CartItem from './cartItem';

class Cart extends Component {

  componentWillMount(){
    this.props.getProductCart();
  }
  
  renderCartList(){
    return this.props.cartProducts.map((cartProduct)=>{
      return(
        <ListGroupItem key={"items_"+cartProduct.id}>
          <CartItem
            key={cartProduct.id}
            img={cartProduct.img}
            category={cartProduct.category}
            name={cartProduct.name} 
            price={cartProduct.price} 
            deleteItem={() => this.props.deleteProductCart(cartProduct.id)} />
        </ListGroupItem>
      );
    });
  }

  render() {
    let ifCartSend=null;
    let obtionsCart=null; 
    if(this.props.cartSave){
      ifCartSend=(<Alert bsStyle="success">Carro guardado con Exito</Alert>);
    }else{
      obtionsCart=(
        <Row>
          <Col xs={6}>
            <h4><b>Total A Pagar:</b> {this.props.totalCart} CPL</h4>
          </Col>
          <Col xs={6} className="text-right">
            <Button 
              onClick={()=>this.props.sendCart(this.props.cartProducts)} 
              disabled={this.props.totalCart==0}
              bsStyle="success">
              Terminar Compra
            </Button>
          </Col>
        </Row>
      );
    }
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h2>Lista de Productos en el Carro de Compras</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
          <ListGroup>
            {this.renderCartList()}
          </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            {ifCartSend}
          </Col>
        </Row>
        {obtionsCart}
      </Grid>
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
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
