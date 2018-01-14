import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProducts } from '../actions/product';
import { addProductToCart } from '../actions/cart';
import ProductList from '../components/productList';

class ProductContainer extends Component {

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

  render() {
    return (
      <ProductList
        currentCategory={this.state.currentCategory}
        prevCategory={this.props.prevCategory}
        nextCategory={this.props.nextCategory}
        products={this.props.products}
        addProductToCart={(productCart)=>this.props.addProductToCart(productCart)}/>
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
export default connect(mapStateToProps,mapDispatchToProps)(ProductContainer);
