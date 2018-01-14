import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Grid, Row, Col } from 'react-bootstrap';

import { getProducts } from '../actions/product';
import { addProductToCart } from '../actions/cart';
import ProductItem from './productItem';
import Wizard from './wizard';

class Product extends Component {

  constructor(){
    super();

    this.state={
      currentCategory:""
    };
  }

  init(category){
    const categoryParsed = category.replace('-', '_').toUpperCase();
    this.props.getProducts(categoryParsed);
    this.setState({
      currentCategory:category.replace('-',' ').replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
    });
  }

  componentWillReceiveProps(nextProps) {
    const { match } = nextProps;
    const { category } = match.params;
    if (category !== this.props.match.params.category) {
      this.init(category);
    }
  }

  componentWillMount(){
    const { match } = this.props;
    const { category } = match.params;
    this.init(category);
  }

  renderProductList(){
    return this.props.products.map((product)=>{
      let productCart={ id:product.id,
                        img:product.url,
                        category:this.state.currentCategory,
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
            additemToCart={() => this.props.addProductToCart(productCart)}/>
        </ListGroupItem> 
      );
    });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h2>Lista de Productos de la Categoría: {this.state.currentCategory}</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Wizard 
              prevCategory={this.props.prevCategory}
              nextCategory={this.props.nextCategory}/>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ListGroup>
              {this.renderProductList()}
            </ListGroup>
          </Col>
        </Row> 
        <Row>
          <Col xs={12}>
            <Wizard 
              prevCategory={this.props.prevCategory}
              nextCategory={this.props.nextCategory}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products:state.product.list,
    nextCategory:state.product.nextCategory,
    prevCategory:state.product.prevCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts:(category)=>dispatch(getProducts(category)),
    addProductToCart:(productCart)=>dispatch(addProductToCart(productCart))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Product);
