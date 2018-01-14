import React, { Component } from 'react';
import { Row, Grid, Col, Button, Alert, ListGroupItem, ListGroup } from 'react-bootstrap';

import CartItem from './cartItem';

const CartList = ({ totalCart, cartSave, cartProducts, sendCart, deleteProductCart }) => {

  let ifCartSend=null;
  let obtionsCart=null;


  const renderCartList=()=>{
    return cartProducts.map((cartProduct)=>{
      return(
        <ListGroupItem key={"items_"+cartProduct.id}>
          <CartItem
            key={cartProduct.id}
            img={cartProduct.img}
            category={cartProduct.category}
            name={cartProduct.name} 
            price={cartProduct.price} 
            deleteItem={() =>deleteProductCart(cartProduct.id)} />
        </ListGroupItem>
      );
    });
  }

  if(cartSave){
    ifCartSend=(<Alert bsStyle="success">Carro guardado con Exito</Alert>);
  }else{
    obtionsCart=(
      <Row>
        <Col xs={6}>
          <h4><b>Total A Pagar:</b> {totalCart} CPL</h4>
        </Col>
        <Col xs={6} className="text-right">
          <Button 
            onClick={()=>sendCart(cartProducts)} 
            disabled={totalCart==0}
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
          {renderCartList()}
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
};

export default CartList;