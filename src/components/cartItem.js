import React, { Component } from 'react';
import { Button, Row, Col, Grid, Image} from 'react-bootstrap';

const CartItem = ({ img ,category, name, price,deleteItem }) => {
  return (
    <Grid>
      <Row>
        <Col xs={2}>
          <Image  src={img} responsive thumbnail/>
        </Col>
        <Col xs={4}>
          <h4>{name}</h4>
        </Col>
        <Col xs={2}>
          <p><strong>{price}</strong> CPL</p>
        </Col>
        <Col xs={2}>
          <Button onClick={deleteItem} bsStyle="danger">
            Eliminar
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};

export default CartItem;