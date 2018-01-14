import React, { Component } from 'react';
import { Row, Grid, Col, ListGroupItem, ListGroup } from 'react-bootstrap';

import ProductItem from './productItem';
import Paginator from './paginator';

const ProductList = ({ currentCategory, prevCategory, nextCategory, products, addProductToCart  }) => {

  const renderProductList=()=>{
    return products.map((product)=>{
      let productCart={ id:product.id,
                        img:product.url,
                        category:currentCategory,
                        name:product.name,
                        price:product.price
                      };
      return(
        <ListGroupItem key={"item_"+product.id}>
          <ProductItem 
            key={product.id}
            name={product.name}
            excerpt={product.excerpt}
            price={product.price}
            imgUrl={product.url}
            additemToCart={() => addProductToCart(productCart)}/>
        </ListGroupItem> 
      );
    });
  }

  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <h2>Lista de Productos de la Categoría: {currentCategory}</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Paginator 
            prevCategory={prevCategory}
            nextCategory={nextCategory}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <ListGroup>
            {renderProductList()}
          </ListGroup>
        </Col>
      </Row> 
      <Row>
        <Col xs={12}>
          <Paginator 
            prevCategory={prevCategory}
            nextCategory={nextCategory}/>
        </Col>
      </Row>
      </Grid>
  );
};

export default ProductList;