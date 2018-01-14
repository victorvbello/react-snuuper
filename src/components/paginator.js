import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';

const Paginator = ({ prevCategory, nextCategory }) => {
  let next=null;
  let prev=(
    <LinkContainer to={'/products/'+prevCategory}>
      <Button bsStyle="primary" disabled={prevCategory==""}>
        Categoría Anterior
      </Button>
    </LinkContainer>);
  if(nextCategory!=""){
    next=(
      <LinkContainer to={'/products/'+nextCategory}>
        <Button bsStyle="success">
          Categoría Siguiente
        </Button>
      </LinkContainer>);
  }else{
    next=(
      <LinkContainer to={'/shoppingCart'}>
        <Button bsStyle="success">
          Ir Al Carrito
        </Button>
      </LinkContainer>);
  }
  return (
    <Row>
      <Col xs={6}>
        {prev}
      </Col>
      <Col xs={6} className="text-right">
        {next}
      </Col>
    </Row>  
  );
};

export default Paginator;