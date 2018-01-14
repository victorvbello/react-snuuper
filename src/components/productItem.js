import React, { Component } from 'react';
import { Button, Image, Row, Col } from 'react-bootstrap';

const ProductItem = ({ name ,excerpt, price, imgUrl, additemToCart }) => {
  return (
    <Row>
      <Col xs={2}>
        <Image  src={imgUrl} responsive thumbnail/>
      </Col>
      <Col xs={2}>
        <h4>{name}</h4>
      </Col>
      <Col xs={3}>
        <p>{excerpt}</p>
      </Col>
      <Col xs={2}>
        <p><strong>{price}</strong> CPL</p>
      </Col>
      <p>
        <Button onClick={additemToCart} bsStyle="primary">Agregar</Button>
      </p>
    </Row>
  );
};

export default ProductItem;